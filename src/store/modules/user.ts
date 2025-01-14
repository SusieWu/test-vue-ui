import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo, getMenu } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
  isShowVerifyCode: boolean
  isFirstLogin: number
  rolesArr: string[]
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''
  public isShowVerifyCode = false
  public isFirstLogin = 0
  public rolesArr: string[] = []

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Mutation
  private SET_ISSHOWVERIFYCODE(isShowVerifyCode: boolean) {
    this.isShowVerifyCode = isShowVerifyCode
  }

  @Mutation
  private SET_ISFIRSTLOGIN(isFirstLogin: number) {
    this.isFirstLogin = isFirstLogin
  }

  @Action({ rawError: true })
  @Mutation
  private SET_ROLESARR(rolesArr: string[]) {
    this.rolesArr = rolesArr
  }
  @Action
  public async Login(userInfo: any) {
    let { userName, password, verifyCodeId, mobileVerifyCodeId, verifyCode, mobileVerifyCode } = userInfo
    userName = userName.trim()
    const { data } = await login({ userName, password, mobileVerifyCodeId, mobileVerifyCode, verifyCodeId, verifyCode })
    if (data.isShowVerifyCode) {
      this.SET_ISSHOWVERIFYCODE(true)
    } else {
      this.SET_ISSHOWVERIFYCODE(false)
    }
    if (data.firstLogin === 1) {
      this.SET_ISFIRSTLOGIN(data.firstLogin)
    }
    setToken(data.token)
    this.SET_TOKEN(data.token)
  }

  @Action({ rawError: true })
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action({ rawError: true })
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserInfo()
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    //todo 角色假数据
    // const { roles, name, avatar, introduction, email } = data
    const { username, avatar, introduction, email } = data /*{
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      email: 'admin@test.com',
      introduction: 'I am a super administrator',
      roles: ['admin'],
    }*/

    const res = await getMenu({})
    if (!res.data || res.data.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    } else {
      res.data.forEach((item: any) => {
        this.roles.push(item.id)
      })
      this.SET_ROLES(this.roles)
    }

    this.SET_NAME(username)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
  }

  @Action({ rawError: true })
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.roles)
    // Add generated routes
    router.addRoutes(PermissionModule.dynamicRoutes)
    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action({ rawError: true })
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout({})
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  get getName() {
    return this.name
  }
}

export const UserModule = getModule(User)
