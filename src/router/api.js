
 uid, 
  token, 
  OrderId, 
  BorrowerName, 
  BorrowerIDNO, 
  BorrowerMobile, 
  BorrowerMarriageStatus, 
  BorrowerSpouseName, 
  BorrowerSpouseIDNO, 
  BorrowerSpouseMobile, 
  CompanyName


GetCompanyInfo
{
  "uid" : "4",
  "token" : "202cb962ac59075b964b07152d234b70",
  "CompanyName" : "平安银行股份有限公司"
}
{
    "d": {
        "__type": "OutputCompanyInfo:#GMOA",
        "msg": "",
        "ret": "ok",
        "data": {
            "__type": "CompanyAuditInfo:#GMOA",
            "Address": "深圳市罗湖区深南东路5047号",
            "AdministrativePenaltyInfo": "0",
            "BusinessEndDate": "1572537600000",
            "BusinessInfo": "0",
            "BusinessScope": "办理人民币存、贷、结算、汇兑业务；人民币票据承兑和贴现；各项信托业务；经监管机构批准发行或买卖人民币有价证券；外汇存款、汇款；境内境外借款；在境内境外发行或代理发行外币有价证券；贸易、非贸易结算；外币票据的承兑和贴现；外汇放款；代客买卖外汇及外币有价证券，自营外汇买卖；资信调查、咨询、见证业务；保险兼业代理业务；黄金进口业务；经有关监管机构批准或允许的其他业务。(《保险兼业代理业务许可证》有效期限至2015年5月1日)^",
            "BusinessStartDate": "567100800000",
            "CompanyLegalPerson": "谢永林",
            "CompanyName": "平安银行股份有限公司",
            "CorpCreditCode": "91440300192185379H",
            "CorpLegalPersonName": "谢永林",
            "CourtAnnouncementInfo": "32367",
            "CourtEnforcementInfo": "执行中笔数116，执行中金额240248601.87，执行中起始日期2007-08-29，执行中终止日期2018-11-22",
            "CreditEnforcementInfo": "5",
            "CriminalInfo": "0",
            "JudicialSaleInfo": "0",
            "LawsuitInfo": "15590",
            "MovablesPledgeInfo": "0",
            "RegisterCapital": "1142489.479万人民币",
            "RiskInfo": "98774",
            "SharePledgeInfo": "0",
            "Status": "存续",
            "TaxOwingInfo": "3",
            "TrialInfo": "104901"
        }
    }
}

GetPersonInfo
{
  "uid" : "4",
  "token" : "202cb962ac59075b964b07152d234b70",
  "PersonName" : "杨辉",
  "PersonIDNO":"342123198107120771",
  "PersonMobile":"13311515060"
}
{
    "d": {
        "__type": "OutputPersonInfo:#GMOA",
        "msg": "",
        "ret": "ok",
        "data": {
            "__type": "OutputPersonInfoData:#GMOA",
            "CompanyInfo": null,
            "CreditInfo": "0",
            "CriminalInfo": "0",
            "EnforcementInfo": "0",
            "LawsuitInfo": "0",
            "LoanExpirationInfo": "0",
            "MultipointLendingInfo": "2",
            "P2PBlacklistInfo": "0",
            "SecurityInfo": "-",
            "TaxInfo": "0"
        }
    }
}

// SecurityInfo : 公安不良行为
// LawsuitInfo : 法院涉诉
// EnforcementInfo : 法院被执行人
// CreditInfo : 失信被执行人
// P2PBlacklistInfo : 网络借贷黑名单
// TaxInfo : 税务负面
// CriminalInfo : 严重违法
// LoanExpirationInfo : 信贷逾期
// MultipointLendingInfo : 多头借贷

      

// CompanyName : "企业名称"
// CompanyLegalPerson : "法定代表人"
// RegisterCapital : "注册资本"
// BusinessStartDate : "营业期限自"
// BusinessEndDate : "营业期限至"
// Status : "登记状态"
// Address: "住所"
// BusinessInfo : 经营异常
// AdministrativePenaltyInfo : 行政处罚
// SharePledgeInfo : 股权出质
// MovablesPledgeInfo : 动产抵押
// TaxOwingInfo : 欠税公告
// JudicialSaleInfo : 司法拍卖
// LawsuitInfo : 法律诉讼
// CourtAnnouncementInfo : 法院公告
// TrialInfo : 开庭公告
// CreditEnforcementInfo : 失信被执行人
// CourtEnforcementInfo : 法院被执行人
// CriminalInfo : 严重违法
// RiskInfo : 企业风险
// BusinessScope : 经营范围






  // 接口地址 : GetStatistics

  // 接口说明 : 获取统计信息

  // 输入数据格式:
  {
    "uid" : "",
    "token" : ""
  }

  // 返回数据格式：
  {
    "VisitUserNumber":"",
    "RegUserNumber":"",
    "ApprovalUserNumber":""
  }

  // 输入数据格式说明：

    // uid : 用户唯一标识id
    // token : 用户身份验证token
    
  // 返回数据格式说明：

    // VisitUserNumber : 访问用户数
    // RegUserNumber : 注册用户数
    // ApprovalUserNumber : 成交用户数


  // 估值
    public string OperationDateTime = "";
        public string HouseLocation1 = "";
        public string HouseLocation2 = "";
        public string HouseArea = "";
        public string HouseUsage = "";
        public string HouseTotalFloor = "";
        public string HouseFloor = "";
        public string HouseOrientation = "";
        public string HouseAge = "";
        public string HouseUnitPrice = "";
        public string HouseTotalPrice = "";
        public string HousePledgePercentage = "";
        public string HousePledgePrice = "";
        public string HouseAveragePrice = "";
        public string HouseDealPeriod = "";
        public string HouseNearbyName1 = "";
        public string HouseNearbyName2 = "";
        public string HouseNearbyName3 = "";
        public string HouseNearbyName4 = "";
        public string HouseNearbyAveragePrice1 = "";
        public string HouseNearbyAveragePrice2 = "";
        public string HouseNearbyAveragePrice3 = "";
        public string HouseNearbyAveragePrice4 = "";
        public string BuildingFinishYear = "";


        人

        public string OperationDateTime = "";
        public string BorrowerName = "";
        public string BorrowerIDNO = "";
        public string BorrowerMobile = "";
        public string BorrowerSecurityInfo = "";
        public string BorrowerLawsuitInfo = "";
        public string BorrowerEnforcementInfo = "";
        //public string BorrowerEnforcementInfoList = "";
        //public string BorrowerEnforcementInfoDetail = "";
        public string BorrowerCreditInfo = "";
        public string BorrowerP2PBlacklistInfo = "";
        public string BorrowerTaxInfo = "";
        public string BorrowerCriminalInfo = "";
        public string BorrowerLoanExpirationInfo = "";
        public string BorrowerMultipointLendingInfo = "";

        企业

        public string OperationDateTime = "";
        public string CompanyName = "";
        public string CompanySecurityIDNO = "";
        public string CompanyPhone = "";
        public string CorpAdministrativePenaltyInfo = "";
        public string CorpSharePledgeInfo = "";
        public string CorpMovablesPledgeInfo = "";
        public string CorpTaxOwingInfo = "";
        public string CorpJudicialSaleInfo = "";
        public string CorpLawsuitInfo = "";
        public string CorpCourtAnnouncementInfo = "";
        public string CorpTrialInfo = "";
        public string CorpCreditEnforcementInfo = "";
        public string CorpCourtEnforcementInfo = "";
        public string CorpCriminalInfo = "";
        public string CorpBusinessScope = "";
        public string CompanyLegalPersonName = "";
        public string CompanyLegalPersonIDNO = "";
        public string RegisterCapital = "";
        public string BusinessStartDate = "";
        public string BusinessEndDate = "";
        public string Status = "";
        public string Address = "";


三个接口
GetHouseValuationHistoryById(string uid, string token, string historyId) 房
GetPersonAuditionHistoryById(string uid, string token, string historyId) 人
GetCompanyAuditionHistoryById(string uid, string token, string historyId) 企业


todo
向东我整理了一下，刚才讲的：
1.查询系统，返回按钮统一返回首页
2.详情，pc和查询放开
3.查询记录页面，添加查看列，直接跳转到table表格展示对应数据（三个接口）
4.右上角按钮点击不灵敏


查询系统详情调用这个 GetEnforcementInfoDetailHistory(string uid, string token, string historyId, string type)
type两个值：查人传person，查企业传corp
