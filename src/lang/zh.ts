export default {
  route: {
    dashboard: '首页',
    business: '业务支撑',
    faultDiagnosis: '故障诊断',
    realTimeFault: '实时故障查询',
    faultCodeLibrary: '故障码库',
    carGroup: '车队管理',
    carGroupBuild: '新建车队',
    carGroupDetail: '车队详情',
    carGroupUpdate: '编辑车队',
    upkeep: '保养管理',
    rule: '保养规则配置',
    manual: '保养手册配置',
    appUserManage: 'app用户管理',
    userManage: '用户管理',
    specialUser: '特殊用户标记',
    buildManager: '新建车队管理员',
    userDetail: '用户详情',
    appConfig: 'app页面配置',
    banner: '页面配置',
    screen: '开屏页配置',
    vehicleManage: '车辆绑定管理',
    basicInfo: '基础信息',
    carManage: '车辆管理',
    messageManage: '消息管理',
    messagePush: '推送消息',
    messageSms: '短消息',
    messageStatistics: '短信统计',
    competition: '节油大赛',
    oilSet: '奖项配置',
    oilSetAdd: '新建-奖项配置',
    oilSetEdit: '编辑-奖项配置',
    oilSetLook: '查看-奖项配置',
    oilNew: '新建活动',
    oilNewLook: '活动详情',
    oilNewEdit: '活动编辑',
    Announcement: '跨活动组别',
    Filtration: '过滤规则',
    Record: '活动数据',
    RecordDetail: '查看获奖信息',
    editCar: '编辑车辆',
    telephone: '紧急电话配置',
    care: '一键呼救',
    monitor: '监控',
    carMonitor: '车辆监控',
    carDetail: '车辆详情',
    terminalList: '终端管理',
    terminalAddAndEdit: '新增/编辑',
    dealerManagement: '经销商管理',
    saleAreas: '销售区域管理',
    im: '在线客服',
    system: '系统管理',
    user: '用户管理',
    role: '角色管理',
    editRole: '编辑角色',
    editUser: '编辑用户',
    dictate: '指令信息'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    ipassword: '请输入密码',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
    picCode: '图形验证码',
    cannotSee: '看不清',
    telCode: '手机验证码',
    setNewPassword: '用户首次登陆请设置新的登陆密码',
    userNameEmpty: '用户名不能为空',
    passwordEmpty: '密码不能为空',
    noPermission: '您的账号没有权限！',
    codeSendSuccess: '验证码发送成功，请注意接收',
    getCode: '获取验证码',
    reSendTime: '秒后重发',
    reSend: '重发验证码',
    newPassword: '新密码',
    sureChange: '确定修改吗?'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  common: {
    none: '无',
    data: {
      BaseData: {
        yOrNo: ['是','否'],
        onOrOff: ['上线','下线']
      },
      ViewData: {
        operateAppScreen: {
        appTypeList: ['车队app' , '司机app' , '服务app ' , '产销app '],
        statusList: ['待生效','生效中','已失效']
      }
      }
    },
    rules: {
      checkString: '含有非法字符，请重新输入',
      checkUrl: '链接地址不正确，请重新输入',
      Num: '只能输入正整数',
      checkColor: '请输入6位a-f字母和数字的任意组合',
      validateEmail: '邮箱格式不正确',
      required: '必填',
      password: '密码由8-16位，必须包含数字、大写、小写字母！',
      confirmPwd: '新密码不能与旧密码相同！',
      pwdConfirmFail: '两次输入密码不一致!',
      letterOrNumber16: '1-16位，支持字母、数字组合',
      mobilePhone: '手机号格式不正确',
      publicTel: '联系方式格式不正确'
    },
    tips: {
      timeOut: '服务器超时请稍后重试',
      goOut: '你已被登出，可以取消继续留在该页面，或者重新登录',
      comfirmOut: '确定登出',
      reLogin: '重新登录',
      operateSuccess: '操作成功',
      delSuccess: '删除成功',
      noRepeat: '不可重复提交',
      uploadImg: '请上传图片',
      finishUpload: '请等待图片上传完成'
    },
    advancedSearch: '高级筛选',
    confirm: '确定',
    cancel: '取消',
    restore: '恢复',
    search: '搜索',
    reset: '重置',
    clear: '清空',
    all: '全部',
    select: '请选择',
    beginDate: '选择起始日期',
    endDate: '选择截止日期',
    yes: '是',
    no: '否',
    to: '至',
    bind: '绑定',
    hasBind: '已绑定',
    unbind: '解绑',
    hasUnbind: '已解绑',
    place: '请输入',
    edit: '编辑',
    add: '新增',
    operate: '操作',
    min: '分钟',
    sec: '秒',
    reSend: '重发',
    export: '导出',
    days: '天',
    kilometre: '公里',
    seconds: '秒',
    clickUpload: '点击上传',
    notice: '提示',
    toDel: '确定删除',
    confirmDel: '确定删除吗？',
    del: '删除',
    mdelete: '批量删除',
    delSuccess: '删除成功',
    netError: '网络服务异常',
    fileUploadFail: '文件上传失败',
    fileSizeFail: '文件大小不得超过',
    warning: '警告',
    title: '标题',
    name: '名称',
    type: '类型',
    image: '图片',
    selectDate: '请选择日期',
    detail: '详情',
    addTo: '添加',
    import: '导入',
    status: '状态',
    placeSelect: '请选择',
    research: '查询',
    create: '新建',
    online: '上线',
    offline: '下线',
    tel: ' 联系方式',
    carBand: ' 品牌',
    carSeries: ' 车系',
    carModel: ' 车型',
    discharge: ' 排放',
    car: '车辆',
    unlimited: '不限',
    card: '卡',
    serialNumber: '序号',
    model: '型号',
    remark: '备注',
    ctrl: '控制器',
    open: '开',
    close: '关',
    unknown: '未知',
    media: '多媒体',
    submit: '提交',
    back: '返回',
    changeSuccess: '修改成功',
    addSuccess: '添加成功',
    changeFail: '修改失败',
    addSuccess2: '新增成功',
    success: '成功',
    fail: '失败',
    lng: '经度',
    lat: '纬度',
    noticePic: '建议比例和分辨率:',
    save: '保存',
    viewImg: '查看大图',
    selectAll: '全选',
    cancelSelectAll: '取消全选',
    noData: '无数据'
  },
  business: {
    confirm: {
      unbind: '确认解绑该车辆吗？',
      unbindText: '解绑操作将导致APP用户所加的车辆失效和数据丢失，请确认是否进行该操作。',
      placehoder: '请输入原因(必填)，不能超过100字',
      onLine: '确认上线吗？',
      offLine: '确认下线吗？',
    },
    bitem: '请输入保养条目',
    edit: '请编辑内容',
    bConfig: '保养手册配置',
    bindTeam: '绑定车队',
    scar: '请选择当前车辆状态',
    processingTime: '处理时间',
    item: '事项',
    current: '车辆当前状态',
    team: '车队',
    opearator: '处理人',
    idCard: '身份证',
    oCode: '组织机构代码',
    viewDetail: '查看详情',
    detailData: '详情数据',
    rNumber: '发票号',
    unbindHistory: '解绑记录',
    vin: '车辆VIN',
    phone: '用户手机号',
    motor: '发动机号',
    firstBind: '车辆首次绑定',
    pvin: '请输入车辆VIN',
    pphone: '请输入用户手机号',
    pmotor: '请输入发动机号',
    carType: '车型',
    carSeries: '车系',
    discharge: '排放',
    arStatus: '当前车辆状态',
    province: '所属省',
    city: '所属市',
    reasonAlert: '请输入解绑原因',
    appConfig: {
      ownType: '车主版',
      driverType: '司机版',
      appType: 'App类型',
      accTarget: '跳转页面',
      tm: '停留时间',
      color: '色号',
      appLink: 'APP页面地址',
      bannerLink: '链接url',
      titleKeyword: '标题关键字',
      searchTitleKeyword: '搜索标题关键字',
      index: '位置',
      moveUp: '上移',
      moveDown: '下移',
      create: '立即创建',
      adsPic: '广告页图片',
      appCustom: 'APP端',
    },
    telephone: {
      usual: '常用',
      help: '救援',
      insurance: '保险公司',
      titleKeyword: '请输入联系人名称',
      carSeries: '系列',
      name: '联系人名称',
      series: '车系选择',
      phone: '联系方式'
    },
    care: {
      userTel: '手机号',
      userTelPla: '请输入手机号',
      uploadTime: '上报时间'
    },
    upkeep: {
      basicMaintenance: '基础保养表',
      maintenanceItems: '保养条目',
      AAKAfter: 'AAK之后',
      pushEndTime: '定保推送截止时间',
      circleMileage: '方向机定保公里',
      firstMileage: '方向机首保公里',
      firstGuaranteeAfter: '首保后',
      machineFirstWarn: '请输入方向机首保公里',
      machineCircleWarn: '请输入方向机定保公里',
      daysWarn: '请输入天数',
      required: '必填',
      maintenanceImport: '保养项导入'
    },
    terminal: {
      name: '终端',
      id: '终端ID',
      unBindCar: '未绑定车辆',
      bindCar: '绑定车辆',
      deviceTag: '设备标签',
      factorySwitch: '出厂开关',
      protocolType: '协议类型',
      ownedDealer: '所属经销商',
      ownedCar: '所属车辆',
      drawingNumber: '配套SIM卡零件图号',
      importMore: '终端批量导入',
      selectTemp: '请选择模板',
      clickDownload: '点击下载',
      tipsText: '填写好Excel文档后，点击导入',
      importSuccess: '导入成功',
      associatedChassisNumber: '关联底盘号',
      placeAssociatedChassisNumber: '关联底盘号',
      associatedCarNumber: '关联车牌号',
      placeAssociatedCarNumber: '关联车牌号',
      associatedDealer: '关联经销商',
      placeAssociatedDealer: '关联经销商',
      idPlaceholder: '请输入1-14位字符',
      simPlaceholder: '请输入11位有效数字',
      peitaoSimLabel: '配套SIM卡零件图号',
      terminalCommunicationLabel: '终端通信号',
      terminalProtocol: '终端协议',
      idRule: '请输入终端ID',
      simRule: '请输入终端SIM卡',
      communicationRule: '请输入终端通信号',
      terminalType: '终端类型',
      typeRule: '请选择终端类型',
      modelRule: '请选择终端型号',
      dealerName: '经销商名称',
      selectDealerName: '请选择经销商名称',
      dealerNo: '经销商编码(重卡/轻卡)',
      area: '所属区域',
      BrandManagement: '经营品牌',
      placeTerminalId: '请输入终端ID',
      placeVin: '请输入VIN',
      selectBindCar: '请选择绑定车辆',
      simCard: 'SIM卡',
      placeSimCard: '请输入SIM卡',
      deviceTagId: '设备标签ID',
      placeDeviceTagId: '请输入设备标签ID',
      terminalModel: '终端型号',
      selectTerminalModel: '请选择终端型号',
      wifiFactoryCtrl: 'WIFI出厂开关',
      selectWifiFactoryCtrl: '请选择WIFI出厂开关',
      importTerminal: '导入终端',
      terminalSimCard: '终端SIM卡',
      selectTerminalProtocol: '请选择终端协议'
    },
    dealer: {
      dealerNo: '经销商编码',
      selectDealerNo: '请选择经销商编码',
      area: '所属销售区域',
      selectAreaDealer: '请选择所属经销商',
      selectArea: '请选择所属销售区域',
      selectDealerAddress: '请选择经销商地址',
      isStrategy: '是否战略级',
      syncTags: '同步标签库',
      ZhongjuCarNo: '中重卡编码',
      placeZhongjuCarNo: '请输入中重卡编码',
      lightCarNo: '轻卡编码',
      placeLightCarNo: '请输入轻卡编码',
      dealerAddress: '经销商地址',
      activeRadius: '激活半径',
      selectActiveRadius: '请选择激活半径',
      lockRadius: '锁车半径',
      selectLockRadius: '请选择锁车半径',
      contactor: '联系人',
      contactPhone: '联系电话',
      createPerson: '创建人',
      createTime: '创建时间',
      topSaleArea: '上级销售区域',
      dealerIsActive: '经销商已启用',
      dealerIsInActive: '经销商已停用',
      exportAll: '导出全部',
      /*新增页面*/
      basicInfo: '基本信息',
      zhongzhongCar: '中重卡',
      zhongzhongCarNo: '中重卡编码',
      lightCar: '轻卡',
      selectAddress: '选择地址',
      secondaryOutlets: '二级网点',
      placeSecondaryOutletsInfo: '请填写二级网点信息',
      outletsName: '网点名称',
      outletsAddress: '网点地址',
      outletsNo: '网点编码',
      riskControlAreaRadius: '风控区域半径',
      coverageRadius: '覆盖半径',
      secondNetworkMode: '二网模式',
      selfEmployed: '自营',
      cooperation: '合作',
      secondNetworkLevel: '二网等级',
      core: '核心',
      important: '重要',
      normal: '一般',
      heavyTruckCollection: '重卡收车',
      heavyChuckLibrary: '重卡盘库',
      lightTruckCollection: '轻卡收车',
      lightChuckLibrary: '轻卡盘库',
      closedCarRadius: '收车半径',
      diskLibraryRadius: '盘库半径',
      lightTruckMainNetwork: '轻卡主网点',
      parametersOfTheLockCar: '到库锁车参数',
      fax: '传真',
      postCode: '邮编',
      dealerImage: '经销商图片',
      uploadImage: '上传图片',
      placeDealerName: '请输入经销商名称',
      selectType: '请选择类型',
    },
    saleArea: {
      areaName: '区域名称',
      selectAreaName: '请选择区域名称',
      areaContactPerson: '区域联系人',
      selectAreaContactPerson: '请选择区域联系人',
      communityContact: '社区联系人',
      communityContactPhone: '区域联系电话',
      country: '所属国家',
      selectCountry: '请选择所属国家',
      V: '越南',
      P: '菲律宾',
      N: '尼日利亚',
      C: '中国'
    }

  },
  basicInfo: {
    edit:{
      v:'车辆基本资料',
      qrcode:'车辆二维码',
      iQrcode:'请输入车辆二维码',
      iCarModelCode:'请输入车型码',
      sCarType:'请选择车辆类型',
      fk:'FK控制器',
      sfk:'请选择FK控制器',
      vi:'车辆信息',
      vId:'车架号',
      iVId:'请输入车架号',
      sMotorType:'请选择发动机类型',
      iMotivitor:'请输入发动机型号',
      imotor:'请输入发动机号',
      oil:'油箱/天然气容量(L)',
      ioil:'请输入油箱/天然气容量(L)',
      sfactory:'请选择工厂代码',
      offline:'下线日期',
      soffline:'选择下线日期',
      sodate:'选择出库日期',
      sold:'已售',
      unsold:'未售',
      sstd:'请选择STD销售日期',
      saak:'请选择AAK销售状态',
      saakDate:'请选择AAK销售日期',
      vcolor:'车牌颜色',
      pvcolor:'请选择车牌颜色',
      scustomer:'请选择所属客户',
      idCard:'证件号',
      price:'购车总金额（万）',
      loan:'贷款总金额（万）',
      unrepay:'未还总金额（万）',
      picture:'车辆图片',
      adminInfo:'管理员信息',
      admin:'管理员',
      bindDate:'绑定时间',
      dirver:'当前司机',
      team:'所在车队',
      master:'主驾/副驾',
      main:'主驾',
      sub:'副驾',
      driverPhoneNo:'司机电话',
      driverName:'司机电话',
      bteam:'所属车队',
      uploadImg:'图片上传',
      sMotivator:'请选择动力类型',
      selectDealer:'请先选择经销商',
      sim:'SIM卡',
      bProvince:'所属省市',
      saveSuc:'车辆保存成功',
    },
    place: '请输入',
    carNo: '车牌号',
    bottomCarNo: '底牌号',
    reasonAlert: '请输入解绑原因',
    carType: '车辆类型',
    dealer: '经销商',
    sim: 'sim卡号',
    motivitor: '发动机型号',
    firstOnlineDate: '首次上线时间',
    produceDate: '下线(制造)日期',
    motorType: '发动机类型',
    std: 'STD状态',
    stype: '动力类型',
    aak: 'AAK状态',
    isSuooprtLock: '终端支持锁车',
    factoryCode: '工厂代码',
    belong: '归属',
    lockStatus: '锁车功能状态',
    bottomNo: '底盘号',
    iBottomNo: '请输入底盘号',
    bottomNoMore: '（英文半角逗号分隔，最多1000）',
    stdSold: 'STD已售',
    stdUnsold: 'STD未售',
    DV: '柴油车',
    NGV: '天然气车',
    aakSold: 'AAK已售',
    aakUnsold: 'AAk未售',
    closed: '已关闭',
    started: '已开启',
    starting: '开启中',
    lock: '开启锁车功能',
    closeLock: '关闭锁车功能',
    export: '导出本页',
    exportAll: '导出全部',
    cid: '车架号(改码前)',
    carModelCode: '车型码',
    dealerCode: '经销商代码',
    bdealer: '所属经销商',
    sbdealer: '请选择所属经销商',
    qrCode: '二维码',
    fksim: 'FK控制器SIM卡',
    lsTime: '锁车状态更新时间',
    firstLocation: '首次有效位置',
    firstTime: '首次有效位置时间',
    isSurCar: '是否监控车',
    change: '长换油',
    aakDate: 'AAK销售日期',
    aakStatus: 'AAK销售状态',
    stdStatus: 'STD销售状态',
    stdDate: 'STD销售日期',
    deviceCode: '终端型号',
    inputTime: '录入平台时间/安装时间',
    inputWay: '录入方式',
    productDate: '下线(制造日期)',
    lightTruck: '轻卡',
    weightTruck: '重卡',
    message: {
      nodataWarn:'本页无数据',
      selectColumn:'请选择导出列',
      downloadSuccess:'下载成功',
      email:'请填写email',
      carWarn:'请勾选锁车车辆',
      confirmOn:'确认开启锁车功能吗?',
      confirmOff:'确认关闭锁车功能吗？',
      on:'车辆不处于防控关闭状态,无法开启',
      off:'车辆不处于防控关闭状态,无法关闭',
    }
  },
  carGroup: {
    groupName: '车队名称',
    groupNamePlaceholder: '请输入车队名称',
    build: '新建车队',
    setVip: '设为 VIP',
    export: '导出',
    isCompany: '是否企业',
    isGroup: '是否集团客户',
    isVip: '是否VIP',
    createType: '是否tboss创建',
    createStartTime: '创建时间',
    startTimePlaceholder: '选择合同开始日期',
    endTimePlaceholder: '选择合同结束日期',
    all: '全部',
    yes: '是',
    no: '不是',
    to: '至',
    id: '车队ID',
    creater: '创建人',
    look: '查看',
    edit: '编辑',
    operation: '操作'
  },
  message: {
    warnMsg: '提示：标题信息不展示在用户短信中',
    title: '标题',
    createUser: '创建人',
    targetUser: '目标用户',
    createTime: '创建时间',
    pv: 'PV',
    uv: 'UV',
    dateTime: '时间',
    noticeType: '通知方式',
    msgType: '消息类型',
    importWarn: '每次批量导入最多支持1000条数据',
    yes: '是',
    no: '否',
    describe: '消息描述',
    content: '内容',
    targetUrl: '消息跳转链接',
    allUser: '全部用户',
    partUser: '部分用户',
    specialUser: '特定用户',
    pKeyWord: '请输入标题关键字',
    pKeyTitle: '请输入标题',
    pKeySender: '请输入发送人',
    carType: '车型',
    carSeries: '车系',
    role: '角色',
    appMsg: 'APP消息',
    sendTime: '推送时间',
    pushNow: '立即推送',
    pushTiming: '定时推送',
    validityTime: '有效期',
    noSave: '不保存，终端离线时消息被忽略',
    yesSave: '保存',
    saveMsg: '终端上线后可收到消息',
    sendMsg: '发送',
    addMessage: '新建消息',
    reSendMsg: '消息重发',
    dateRange: '统计日期范围',
    sendMsgType: '发送端',
    type: '类型',
    sendTotalCount: '发送总数',
    sendSuccessCnt: '发送成功条数',
    sendLinkCnt: '链接点击条数',
    sentTime: '发送时间',
    sender: '发送人',
    sendCnt: '发送条数',
    manualDistribution: '手动发放',
    activator: '促活类',
    whole: '全部',
    lastWeek: '最近一周',
    lastMonths: '最近一个月',
    lastThreeMonths: '最近三个月',
    lastSixMonths: '最近六个月',
    LastYear: '最近一年',
    allWay: '全部方式',
    app: 'APP',
    inputMobile: '请输入手机号/VIN码',
    required: '必填',
    upTo20Words: '最多20个字',
    upTo40Words: '最多40个字',
    upTo60Words: '最多60个字',
    upTo500Words: '最多500个字',
    owner: '车主',
    driver: '司机',
    administrators: '管理员',
    days: '天',
    messageCreatedSuccessfully: '消息新建成功'
   },
  monitor: {
    real: '实时在途',
    carManage: '车辆管理',
    detail: ' 车辆详情',
    reproduce: '在途重现',
    lock: '锁车',
    unlock: '解锁',
    fActive: '防控激活',
    fClosed: '防控关闭',
    data: '实时数据',
    refresh: '刷新固化树',
    fullscreen: '全屏查看',
    returnscreen: '退出全屏',
    lockWarn:"车辆处于锁车状态，请谨慎操作",
    activeWarn:"车辆处于防控激活状态，执行锁车操作后，车辆会在静止状态下第二次上电后锁车。请谨慎操作。",
    lockMessage:"车辆防控激活后，才能对车辆执行锁车、解锁操作（激活条件：车辆打火)",
    carWarn:"由于平台与车辆状态不一致，平台状态自动跳转为与车辆一致！",
    pwdWarn:"密码为空，请输入密码",
    caridWarn:"carId为空",
    confirm: {
      tree: '开启实时数据后车辆树加载会变慢，确定开启?',
      noposition: "该车辆无位置点",
    },
    car: {
      basic: '基本信息',
      fk: 'FK控制器SIM（通信号)',
      cNo: '车架号',
      container: '油箱容量(L)',
      preBtmNo: '改码前底盘号',
      fkId: 'FK控制器ID',
      preCNo: '改码前车架号',
      salesStatus: '分渠销售状态',
      preSalesInfo: '售前转运信息',
      outdate: '出库日期',
      salesInfo: '分渠销售信息',
      salesDate: '分渠销售日期',
      loanAmount: '贷款总金额',
      carAmount: '购车总金额',
      overdraftAmount: '剩余未还款',
      cInfo: '客户信息',
      cName: '客户名称',
      lastTime: '上次保养时间',
      contract: '联系方式',
      lastLocation: '上次保养地点',
      catType: '车型信息',
      driveType: '驱动形式',
      enginePower: '发动机功率',
      RA: '后桥',
      tires: '轮胎',
      ft: '驱动厂家及型号',
      gearbox: '变速箱',
      wheelbase: '轴距',
      speedRatio: '速比',
      f1Factory: '前桥1厂家',
      if1Factory: '请输入前桥1厂家',
      f2Factory: '前桥2厂家',
      if2Factory: '请输入前桥2厂家',
      b1Factory: '后桥1厂家',
      ib1Factory: '请输入后桥1厂家',
      b2Factory: '后桥2厂家',
      ib2Factory: '请输入后桥2厂家',
      f1Type: '前桥1型号',
      if1Type: '请输入前桥1型号',
      f2Type: '前桥2型号',
      if2Type: '请输入前桥2型号',
      b1Type: '后桥1型号',
      ib1Type: '请输入后桥1型号',
      b2Type: '后桥2型号',
      ib2Type: '请输入后桥2型号',
      noposition: "该车辆无位置点",
    },
    search: {
      carno: '车牌号',
      sim: 'SIM卡号',
      group: '分组名',
      deviceId: '终端ID号',
    },
    status: {
     unactive: '未激活',
     actived: '已激活',
     locked: '已锁车',
     activing: '正在激活',
     canel: '正在取消激活',
     locking: '正在锁车',
     unlock: '正在解锁',
    },
    info: {
      dealer: '所属经销商',
      customer: '所属客户',
      carType: '车辆类型',
      engineType: '发动机类型',
      lastlocation: '末次有效位置',
      offline: '离线',
      online: '在线',
      lasttime: '末次有效位置时间',
      back: '返回地图',
      rpTime: '上报时间',
      lockStatus: '平台锁车状态',
      totalMiles: '总里程',
      status: '状态',
      breakdown: '当前故障',
      weight: '整车载重',
    },
    track: {
      player_box: {
        slow_speed: '慢速',
        normal_speed: '正常',
        fast_speed: '快速',
        faster_speed: '极快',
        noTrack: '当前无轨迹',
        end: '已经到头了',
        back: '后退',
        pause: '暂停',
        play: '播放',
        onward: '前进',
      },
      index:{
        exportTrack:"导出轨迹",
        exportCarCondition:"导出车况",
        exportData:"导出实时数据",
        point:"轨迹点",
        totalMiles:"时间段内总里程",
        totalOil:"时间段内总油耗",
        selectTime:"请选择时间区间",

      }  

    }
  },
  ajComponents: {
    selectFile: '选择文件',
    import: '导入',
    uploadSuccess: '上传成功！',
    errTips: '上传失败！',
    tips: '上传不超过{size}的{accept}格式文件',
    maxTip: '文件大于',
    addressSearchKeywrod: '请输入地址查询关键字',
    GCJ02Lng: 'GCJ02经度',
    placeLng: '请输入经度',
    GCJ02Lat: 'GCJ02纬度',
    placeLat: '请输入纬度',
    addressDetails: '详细地址',
    placeAddress: '请输入地址',
    noSearchResult: '没搜到结果',
    errTip: '错误'
  },
  oil: {
    groupName: '组名',
    groupId: '组ID',
    required: '必填',
    activityName: '请输入活动名称',
    newActivity: '新建活动',
    crossGroup: '跨活动组别',
    see: '查看',
    edit: '编辑',
    withdraw: '撤回',
    unEnable: '停用',
    enable: '启用',
    launch: '投放',
    activityData: '活动数据',
    filterRule: '过滤规则',
    operation: '操作',
    founder: '创建人',
    createTime: '创建时间',
    currentState: '当前状态',
    deactivated: '已停用',
    enabled: '已启用',
    activityTime: '活动时间',
    activityTimeRequired: '活动时间必填',
    registrationTime: '报名时间',
    registrationTimeRequired: '报名时间必填',
    activity: '活动名称',
    activityRequired: '活动名称必填',
    activityId: '活动ID',
    selectId: '请选择活动ID',
    success: '成功',
    confirmation: '请确认是否将该活动',
    activityTile: '节油大赛活动配置',
    textEdit: '文案编辑',
    textEditRequired: '文案编辑必填',
    refueling: '是否开启加油值',
    refuelingRequired: '请选择加油值是否开启',
    awards: '奖项发放类型',
    awardsSelect: '请选择奖项发放类型',
    imageRequired: '请上传图片',
    createNow: '立即创建',
    distribution: '全部发放',
    highValue: '优先发放高价值',
    lowValue: '优先发放低价值',
    setUp: '设置',
    activityDeatail: '活动细则',
    wechatTitle: '微信分享标题',
    wechatDesc: '微信分享描述',
    activityNotStart: '活动未开始-分享页提示',
    registrationStage: '报名阶段-分享页提示',
    activityStage: '活动阶段-分享页提示',
    endActivity: '活动结束-分享页提示',
    errorData: '异常数据提示',
    reachingFinalStandard: '达到决赛要求，且排名达标',
    reachingFinalNotStandard: '达到决赛要求，且排名未达标',
    notReachingFinalRanking: '里程未达到决赛要求提示',
    loadNotReachingFinalStandard: '载重未达到决赛要求提示',
    kickOut: '踢出活动提示',
    notEnteringRanking: '未入榜提示',
    notAward: '未获奖时提示',
    notEnrollCar: '无报名车辆提示',
    likeValue: '加油值提示',
    activityStop: '活动停用提示',
    clickUpload: '点击上传',
    less: '建议少于500个字',
    fonts: '描述少于300个字',
    titleLess: '标题少于100个字',
    descLess: '描述少于100个字',
    newGroup: '新建组别',
    searchActivityName: '搜索活动名称',
    listId: '榜单ID',
    listName: '榜单名称',
    selectListName: '请输入榜单名称',
    startTime: '开始时间',
    endTime: '结束时间',
    relatedAcitivity: '关联活动',
    crossActivity: '跨活动降幅榜',
    finalAward: '是否最终段奖项',
    selectFinalAward: '最终段奖项必选',
    stageAward: '是否有阶段奖项',
    anyAward: '是否有报名奖项',
    selectActivityId: '选择活动ID(多选)',
    schemeId: '关联奖项方案ID',
    selectSchemeId: '请选择关联奖项方案ID',
    registrationAward: '报名奖励',
    ultimateRewards: '最终奖励',
    modelRange: '车型范围',
    editGroup: '编辑组',
    editRules: '编辑规则',
    editAwards: '编辑奖项',
    addGroup: '添加组(仅支持查看)',
    horsepower: '请选择车辆马力',
    driving: '请选择驱动形式',
    category: '请选择车辆大类',
    vehicle: '请选择车辆品系',
    setAwardRule: '设置奖项规则(仅支持查看)',
    times: '参与次数',
    intervalTime: '间隔时间',
    grouping: '分组',
    setGroup: '是否设定载重分组',
    finalFilter: '最终排名载重过滤条件',
    if: '若',
    or: '或',
    mileage: '行驶里程',
    need: '需',
    oilConsumption: '百公里油耗',
    setRules: '设置排名规则(仅支持查看)',
    lowest: '进入排名最小里程',
    selectType: '选择类型',
    daily: '每日排名最小里程',
    finalRanking: '最终排名油耗过滤条件',
    fuelConsumption: '降幅榜油耗差值',
    percentage: '百分比',
    percentageRange: '降幅榜百分比范围',
    groupType: '组别类型',
    groupTypeScreen: '组别类型筛选',
    groupRange: '组别范围',
    groupRangeScreen: '组别范围筛选',
    loadRange: '载重范围',
    loadRangeScreen: '载重范围筛选',
    carRangeScreen: '车型范围筛选',
    userRangeScreen: '用户范围筛选',
    carRange: '车型范围',
    userRange: '用户范围',
    screen: '筛选',
    release: '发布',
    groupTypeName: '组别名称',
    userName: '用户名',
    averageFuel: '累计平均油耗',
    totalMileage: '总行驶里程',
    totalFuel: '总油耗',
    currentRanking: '当前排名',
    refuelingValue: '加油值',
    terminated: '已终止',
    activityEnd: '活动终止',
    editInfo: '修改信息',
    saveInfo: '保存信息',
    cancelEdit: '取消修改',
    oilList: '油耗榜',
    reductionList: '降幅榜',
    crossList: '跨幅榜',
    standardUsers: '上榜达标用户',
    endUsers: '最终达标用户',
    confirmData: '确认修改活动数据',
    modification: '确认修改',
    operationSuccessful: '操作成功,请等待30秒后重新计算排名',
    InactiveActivity: '停用的活动，无法修改数据',
    afterActivity: '活动终止后',
    afterActivityKickOut: '活动终止后将从此活动中被踢出，不在继续参与该期活动',
    kickOutActivity: '将从此活动中被踢出，不在继续参与该期活动',
    calculated: '正在计算排名中，请稍后重试',
    unsaved: '当前页面有未保存的信息，请先保存后再操作',
    unablePublish: '停用的活动，无法发布数据',
    cannotPublished: '已结束的活动，无法发布数据',
    confirmRelease: '确认发布',
    publishSuccess: '发布成功',
    cannotRevoked: '结果发布后，无法撤销，请确认用户信息后发布',
    awardStage: '获奖阶段',
    awardStageScreen: '获奖阶段筛选',
    userInfo: '用戶信息',
    userInfoScreen: '用戶信息筛选',
    signAwards: '报名获奖',
    stepAwards: '阶段获奖',
    finaledAward: '最终获奖',
    addedInformation: '已添加信息',
    noInformation: '未添加信息',
    operationSuccess: '操作成功',
    group: '组别',
    idInfo: '身份证信息',
    address: '地址',
    updateTime: '更新时间',
    prizeName: '奖品名称',
    finalPrizes: '最终奖项',
    phasePrizes: '阶段奖项',
    enrollPrizes: '报名奖项',
    createRule: '新建配置',
    searchId: '搜索方案名称或ID',
    ranking: '排名',
    luckDraw: '抽奖',
    schemeType: '方案类型',
    selectSchemeType: '请选择方案类型',
    schemeName: '方案名称',
    schemeIds: '奖项方案ID',
    beingUsed: '该方案正在被以下活动使用，不可停用',
    awardScheme: '奖项方案',
    toEnable: '是否启用该奖项方案',
    toDisable: '是否停用该奖项方案',
    awardContent: '奖项内容',
    addAwardContent: '请添加奖项内容',
    addAwards: '添加奖品',
    sort: '排序',
    awardName: '奖项名称',
    awardType: '奖品类型',
    awardNum: '奖品数量',
    winning: '中奖概率',
    scopeAwards: '获奖范围',
    restrictions: '中奖限制',
    prizeValue: '奖品价值',
    prizeValueRange: '（0到100万，奖品数值不能相等）',
    saveProduct: '保存方案',
    awardPic: '奖品图片',
    selectAwardType: '请选择奖品类型',
    integral: '积分',
    material: '实物',
    fictitious: '虚拟',
    enterScheme: '请输入方案名称',
    enterAwardName: '请输入奖项名称',
    maxName: '您输入的文字已达10字的长度上限',
    prizePicture: '请上传奖品图片',
    prizeType: '请输入奖品类型',
    prizesNum: '请输入奖品数量',
    prizesValue: '请输入奖品价值',
    startingRank: '请输入开始名次',
    endingRank: '请输入结束名次',
    enterWinning: '请输入中奖概率',
    prizeRepeated: '奖品价值有重复',
    addAward: '请添加奖品',
    addUp: '所有奖项概率相加为100%',
    awardEditing: '奖项编辑成功',
    awardAdding: '奖项添加成功',
    prizeExits: '奖品价值已存在',
    integer: '请输入正整数',
    prizeInteger: '奖品价值为 0~1000000的整数',
    prizeNum: '奖品数量为 0~500000的整数',
    negative: '中奖限制为非负整数',
    positiveInteger: '中奖限制为非负整数中奖概率为0-100之间的正整数',
    prizesNumber: '该项奖品的中奖数量，所有奖品的中奖概率加起来为100',
    prizeTimes: '每个用户可中奖的限制次数，默认为无限制',
    editSuccess: '编辑成功',
    createActivitySuccess: '新建活动成功',
    timeNotSame: '开始时间与结束时间不能相同',
    lessThanTime: '结束时间不能小于开始时间',
    greaterThanTime: '开始时间不能大于结束时间',
    addSuccess: '添加成功',
    exportEmail: '后台正在导出，稍后请查收邮件'
  },
  export: {
   desc: '导出说明',
   file: '选取文件',
   excel: 'EXCEL导入',
   repeat: '数据重复',
   formatErr: '，数据格式不正确',
   download: '模板下载',
   email: '邮箱帐号',
   input: '请输入正确的邮箱',
   iemail: '请输入邮箱',
   limit: '请输入50个以内的字符',
   valid: '请输入邮箱账号',
   exceed: '信息数据量过大，请输入邮箱接收',
   receive: '后台正在导出，稍后请查收邮件',
   importCarNo: '请修改对应序号的车辆数据后再进行导入！',
   notAdd: '暂不添加',
   inport: '导入',
   among: '条，其中：',
   success: '成功',
   item: '条，',
   fault: '失败',
   index: '序号',
   existWarn: '，车队中已存在，请勿重复加车',
   noCarInfo: '，车辆信息在系统中没有记录，无法添加',
  },
  role: {
    roleName: '角色名称',
    roleType: '角色类型',
    number: '序号',
    operator: '创建人',
    operateTime: '创建时间',
    updateTime: '最后修改时间',
    basicInfo: '基本信息',
    roleInfo: '权限信息',
    permissionName: '功能权限',
    addSuccess: '添加成功',
    editSuccess: '编辑成功',
    delSuccess: '删除成功',
    roleEmptyAlert: '请选择功能权限',
    roleNameEmptyAlert: '请输入角色名称',
    roleNameLimitAlert: '请输入角色名称',
    roleTypeEmptyAlert: '请输入角色名称',
  },
  user: {
    account: '账号',
    userType: '用户类型',
    pastDue: '过期状态',
    operator: '创建人',
    operatorTime: '创建时间',
    associatedDealer: '关联经销商',
    roleName: '角色名称',
    name: '姓名',
    nameLimit: '姓名长度最大30个字符',
    department: '部门',
    ownerRole: '拥有权限',
    lockStatus: '锁定状态',
    unLimit: '不限',
    normal: '正常',
    expire: '已过期',
    locked: '已锁定',
    resetPassword: '重置密码',
    zzk: '中重卡',
    qk: '轻卡',
    bothZzkQk: '共网',
    dealerCode: '经销商（中重卡/轻卡编码）',
    dealerName: '经销商名称',
    tel: '手机号',
    ableTime: '有效期',
    askIsReset: '确定重置账号',
    thePassword: '的密码吗？',
    resetSuccess: '重置成功',
    number: '数量',
    accountName: '账号名',
    confirmPwd: '确认密码',
    email: '邮箱',
    emailLimit: '邮箱长度最大32个字符',
    tip: '备注',
    tipLimit: '备注长度最大200个字符',
    useStates: '使用状态',
    termVilidate: '有效期',
    addUser: '添加用户',
    addSuccess: '用户添加成功',
    editSuccess: '用户修改成功',
    delUser: '删除用户',
    roleInfo: '权限信息',
    team: '分组',
    station: '服务站'
  },
  dictate: {
    terminalId: '终端ID',
    commandDir: '指令方向',
    pToP: '平台-平台',
    terminalToP: '终端-平台',
    pToTerminal: '平台-终端',
    commandType: '指令类型',
    success: '成功',
    fail: '失败',
    messageError: '消息有误',
    terminalNotSupport: '终端不支持',
    alarmConfirm: '报警处理确认',
    terminalOffLine: '终端离线',
    terminalUnregistered: '终端未注册',
    waitNoResponse: '等待未响应',
    executing: '正在执行',
    invalidOperateType: '操作类型无效',
    invalidLimitType: '限制类型无效',
    carShutdown: '车辆关机',
    abnormalCommunicate: '总线通信异常',
    commandTime: '指令时间',
    startTime: '开始时间',
    endTime: '结束时间',
    customer: '所属客户',
    operateIp: '操作人IP',
    operate: '操作人',
    operateTime: '操作时间',
    operateDes: '操作描述',
    desc: '导出说明',
    email: '邮箱帐号',
    input: '请输入正确的邮箱',
    valid: '请输入邮箱账号',
    exceed: '信息数据量过大，请输入邮箱接收'
  },
  carGroupBuild: {
    teamName: '车队名称',
    setManager: '指派管理员',
    setManagerTip: '请输入管理员账号或姓名或手机号进行查询（没有找到管理员可以‘新建管理员’）',
    buildManager: '新建管理员',
    showBuild: '查看新建',
    save: '保存',
    noName: '无姓名',
    noAccount: '无账号',
    noPhone: '无手机号',
    managerName: '管理员名称：',
    managerAccount: '管理员账号：',
    passWord: '管理员密码：',
    cancel: '取消',
    add: '添加',
    BatchAddCarTip: '是否需要批量加车？',
    BatchAddCarMaxTip: '每次批量导入最多支持1000条数据',
    teamNameRequire: '请输入车队名称',
    teamNameUnexpected: '仅支持汉字、字母、数字以及"_"或"-"组合',
    teamNameMaxTip: '请最多输入32个字',
    managerAccountRequire: '请输入管理员账号',
    aTozRequire: '账号至少包含一个字母',
    managerAccountUnexpected: '仅支持字母、数字以及一般字符',
    minTip: '请至少输入6个字符',
    maxTip: '请最多输入20个字符',
    sunmitFault: '提交失败',
    buildFault: '创建失败',
    nameUnexpected: '请输入 2 到 20 个字符',
    nameRequired: '请输入管理员名称',
    managerRequired: '请选择车队管理员',
    possWordRequired: '请输入管理员密码',
    possWordUnexpected: '仅支持字母、数字以及一般字符',
    possWordMinTip: '请至少输入6个字符',
    possWordMaxTip: '请最多输入20个字符'
  },
  carGroupDetail: {
    carTeamInfo: '车队信息',
    carTeamID: '车队ID:',
    carTeamName: '车队名称:',
    managerName: '管理员名称',
    manager: '管理员',
    managerAccount: '管理员账户',
    managerPhone: '管理员手机号码',
    Cars: '关联车辆',
    series: '车系',
    model: '车型',
    discharge: '排放',
    licenseNo: '车牌号',
    STD: 'STD时间',
    AAK: 'AAK时间'
  },
  im: {
    retract: '您撤回了一条消息',
    aboutHis: '以上是历史消息',
    curSession: '当前会话',
    history: '历史记录',
    sessionTime: {
      title: '会话时间',
      all: '全部',
      today: '今天',
      day7: '7天',
      day30: '30天',
      custom: '自定义',
      to: '至',
      startTime: '开始日期',
      endTime: '结束日期',
    },
    username: '用户名',
    placeUsername: '请输入用户名',
    role: '角色',
    sessionStartTime: '会话开始时间',
    sessionEndTime: '会话结束时间',
    onlineNow: '当前在线',
    loginTime: '登录时间',
    callbackChat: '回呼',
    callbackSuccessTips: '操作成功，正在连接...',
    accountError: '账号错误',
    noNick: '暂无昵称',
    timeOutClose: '超时关闭',
    finishService: '结束服务',
    closeDialogTips: '您是否要关闭当前会话窗口？',
    noMoreHistory: '已无更多记录',
    placeContent: '请输入内容',
    send: '发送',
    invalidHint: '您无权限发送消息',
    emptyMsg: '请不要发送空消息',
    maxCountMsg: '请不要超过800个字',
    carList: '车辆列表',
    userInfo: '用户信息',
    chassisCarNumberPlaceholder: '请输入底盘号/车牌号',
    userRoleName: '用户角色名',
    oneDealer: '一级经销商',
    secondDealer: '二级经销商',
    oneServiceStation: '一级服务站',
    secondServiceStation: '二级服务站',
    userRealName: '用户姓名',
    carInfo: '车辆信息',
    carNumber: '车牌号',
    engineType: '发动机类型',
    chassisCode: '底盘号',
    carSerise: '驾驶室',
    carSeriseType: '驾驶室类型',
    mileage: '行驶公里数',
    buyTime: '购车时间',
  },
  carGroupUpdate: {
    carTeamInfo: '车队信息',
    teamID: '车队ID:',
    teamName: '车队名称:',
    save: '保存',
    manager: '管理员',
    addManager: '添加管理员',
    managerPlaceHolder: '请输入管理员账号或姓名或手机号进行查询（没有找到管理员可以‘新建管理员’）',
    noName: '无姓名',
    noPhone: '无手机号',
    noAccount: '无账号',
    newManamger: '新建管理员',
    confirm: '确定',
    managerName: '管理员名称：',
    managerAccount: '管理员账号：',
    password: '管理员密码：',
    cancel: '取消',
    add: '添加',
    managerPhone: '管理员手机号码',
    deleteManager: '删除管理员',
    bindCars: '关联车辆',
    addCar: '添加车辆',
    batchAddCar: '批量加车',
    series: '车系',
    model: '车型',
    discharge: '排放',
    licenseNo: '车牌号',
    STD: 'STD时间',
    AAK: 'AAK时间',
    vinPlaceHolder: '请输入至少8位车辆 VIN 搜索',
    search: '搜索',
    selectCar: '选择车辆',
    selectedCar: '已选车辆',
    managerAccountRequire: '请输入管理员账号',
    aTozRequire: '账号至少包含一个字母',
    managerAccountUnexpected: '仅支持字母、数字以及一般字符',
    managerAccountMinTip: '请至少输入6个字符',
    managerAccountMaxTip: '请最多输入20个字符',
    managerPasswordRequire: '请输入管理员密码',
    managerPasswordUnexpected: '仅支持字母、数字以及一般字符',
    managerPasswordMinTip: '请至少输入6个字符',
    managerPasswordMaxTip: '请最多输入20个字符',
    importWarn: '每次批量导入最多支持1000条数据',
    managerNameRequire: '请输入管理员名称',
    managerNameUnexpected: '请输入 2 到 20 个字符',
    addSuccess: '新增成功',
    addFault: '新增失败，请重试',
    searchSuccess: '查询成功',
    searchFault: '查询失败',
    appendSuccess: '添加成功',
    appendFault: '添加失败',
    createManagerAndBindSuccess: '创建管理员并绑定成功',
    submitFault: '提交失败',
    deleteWarn: '当前车队管理员只有一个，不得删除。如需删除该管理员请先添加新的管理员',
    deleteConfirm: '确定要删除该管理员吗？',
    tip: '提示',
    deleteSuccess: '删除成功!',
    canceled: '已取消删除',
    changeSuccess: '修改成功',
    changeFault: '修改失败',
    operate: '操作'
  },
  library:{
    parts:'部件',
    partsName:'部件名称:',
    partsVal:'部件值:',
    diagnostic:'诊断仪代码:',
    group:'故障分组:',
    level:'故障等级:',
    serious:'严重故障',
    common:'一般故障',
    heating:'尿素加热相关故障',
    type:'干预类型:',
    cc:'客服干预:',
    empty:'空',
    desc:'描述',
    needDesc:'描述必填',
    needDFMI:'FMI必填',
    needLevel:'故障等级必填',
    needGroup:'故障分组必填',
    needValue:'部件值必填',
    needWidget:'部件必填',
    needSPN:'SPN必填',
    import:'导入故障码库',
    cancelDelete:'已取消删除',
    deleteFail:'已取消删除',
    delete:'删除故障码配置?',
    operateFail:'操作失败',
    remark:'备注：每次批量导入最多支持1000条数据',
    formatCode:'诊断仪代码只能输入数字或字母或 /',
    formatSPN:'SPN只能输入数字或字母或 /',
    solution:'解决办法：',
    reason:'出错原因：',
    question:'导致问题：',
    widget:'故障部件：',
    code:'诊断仪代码：',
    inter:'干预类型：'
  },
  userManage: {
    userID: '用户ID',
    userIDPlaceHolder: '请输入用户ID',
    userName: '用户名',
    userNamePlaceHolder: '请输入用户名',
    chassisNumber: '底盘号',
    chassisNumberPlaceHolder: '请输入底盘号',
    tel: '注册手机号',
    telPlaceHolder: '请输入注册手机号',
    search: '搜索',
    bindCar: '绑定车辆',
    newManager: '新建车队管理员',
    batchExport: '批量导出',
    registrationTime: '注册时间',
    to: '至',
    selectDate: '请选择日期',
    lastLoginTime: '最后登录时间',
    createSource: '创建来源',
    all: '全部',
    carTeamApp: '车队app',
    carTeamWeb: '车队web',
    phone: '手机号',
    account: '账号',
    accountName: '用户名',
    creater: '创建人',
    createTime: '创建时间',
    operate: '操作',
    look: '查看',
    exporting: '后台正在导出，稍后请查收邮件',
  },
  userDetail: {
    userInfo: '用户信息：',
    phone: '手机号:',
    userName: '用户名:',
    userID: '用户ID:',
    account: '账号:',
    licenseType: '驾照类型:',
    createTime: '创建时间:',
    trueName: '真实姓名:',
    creater: '创建人:',
    idNo: '组织机构代码（身份证号）:',
    createSource: '创建来源',
    registeredSource: '注册来源:',
    refereeAccount: '推荐人账号:',
    refereePhone: '推荐人手机号:',
    refereeSource: '推荐人来源:',
    firstLogonTime: '首次登陆时间:',
    bindCars: '关联车辆：',
    unbind: '解绑',
    identity: '身份',
    carSeries: ' 车系',
    carModel: ' 车型',
    discharge: ' 排放',
    carNo: '车牌号',
    invoiceNumber: '发票号',
    photo: '发票或行驶证照片',
    STD: 'STD时间',
    AAK: 'AAK时间',
    whetherDriving: '是否驾驶',
    yes: '是',
    no: '否',
    bindCarTeams: '关联车队：',
    carTeamName: '车队名称',
    carNum: '车辆数量',
    driverNum: '司机数量',
    manager: '管理员',
    driver: '司机',
    owner: '车主',
    driverApp: '司机APP',
    ownerApp: '车主APP',
    teamWeb: '车队Web'
  },
  buildManager: {
    managerName: '管理员名称',
    managerNameUnexpected: '请至少输入2位以上的汉字、字母或数字',
    managerAccount: '管理员账号',
    accountNameUnexpected: '请至少输入6位字母或数字',
    passWord: '管理员密码',
    passWordUnexpected: '请输入6-20位的字母、数字',
    team: '所属车队',
    teamPlaceholder: '请输入车队名称进行查询（没有找到车队可以‘新建车队’）',
    newTeam: '新建车队',
    showBuild: '查看新建',
    save: '保存',
    newManager: '新建管理员',
    teamName: '车队名称',
    cancel: '取消',
    add: '添加',
    managerNameRequired: '请输入管理员名称',
    managerNameWarn: '只能输入2-20字符的字母、数字',
    teamNameRequired: '请输入车队名称',
    teamNameWarn: '仅支持汉字、字母、数字以及"_"或"-"组合',
    teamNameMax: '请最多输入32个字',
    managerAccountRequired: '请输入管理员账号',
    aTozRequire: '账号至少包含一个字母',
    managerAccountWarn: '仅支持字母、数字以及一般字符',
    managerAccountMin: '请至少输入6个字符',
    managerAccountMax: '请最多输入20个字符',
    managerPasswordRequired: '请输入管理员密码',
    managerPasswordWarn: '仅支持字母、数字以及一般字符',
    managerPasswordMin: '请至少输入6个字符',
    managerPasswordMax: '请最多输入20个字符',
    tip: '每次批量导入最多支持1000条数据',
    selectTeam: '请选择所属车队',
    buildSuccess: '创建成功',
    buildFault: '创建失败,请重试',
    submitFault: '提交失败',
  },
  realTimeFault: {
    carNo: '车牌号:',
    faultGroup: '故障分组:',
    faultLevel: '故障等级:',
    all: '全部',
    sFault: '严重故障',
    cFault: '一般故障',
    dFault: '尿素加热相关故障',
    interventionType: '干预类型:',
    serviceIntervention: '客服干预',
    void: '空',
    search: '搜索',
    exportFaults: '导出所有实时故障',
    currentFaultNum: '车辆实时故障上报数：',
    carType: '车辆型号',
    partsName: '部件名称',
    partsValue: '部件值',
    faultCode: '故障码',
    desc: '中文描述',
    startTime: '故障开始时间',
    operate: '操作',
    detail: '详情',
    exporting: '后台正在导出，稍后请查收邮件',
    searchWarn: '车牌号和VIN至少输入一项',
  },
  faultCodeLibrary: {
    faultCodeLibrary: '故障码库',
    fmi: 'FMI 库',
    groupSetting: '分组配置'
  },
  fmi: {
    fmi: 'FMI值',
    faultLevel: '故障等级',
    desc: '中文描述'
  },
  groupSetting: {
    faultGroup: '故障分组:',
    powerType: '动力类型：',
    all: '全部',
    discharge: '排放：',
    ecuType: 'ECU 类型：',
    ecuVersion: 'ECU 版本：',
    engineBrand: '发动机品牌：',
    engineType: '发动机型号:',
    index: '序号',
    operater: '操作人',
    lastUpdateTime: '最后更新时间',
    operate: '操作',
    detail: '查看',
    update: '编辑',
    delete: '删除',
    deleteConfirm: '确认要删除这条分组配置？',
    tip: '提示',
    confirm: '确定',
    cancel: '取消',
    deleteSuccess: '删除成功',
    deleteFault: '删除失败，请重试',
    canceled: '已取消删除',
    selectedEngineType: '已选发动机型号',
    allClear: '全部清除',
    submit: '提交',
    goback: '返回',
    export: '导出',
    faultGroupRequire: '请填写故障分组',
    faultGroupMax: '故障分组最多50字符',
    powerTypGroupRequire: '请选择动力类型！',
    dischargeRequire: '请选择排放！',
    ecuTypeRequire: '请选择ECU类型！',
    engineBrandRequire: '请选择发动机品牌！',
    operateSuccess: '操作成功',
    operateFault: '操作失败'
  }
}
