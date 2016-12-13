
const ModulesInfo = {
	menus: [
		{
			menuName: '教师能力评估',
			//linkTo: 'manages/goldenManagement',
			moduleID: "manage-goods",
			subMenu: [
				{
					menuName: '教师基本分析',
					linkTo: '',
					moduleID: "gbasicAbilityAnalysis",
				},
				{
					menuName: '教师增量分析',
					linkTo: '',
					moduleID: 'incrementAnalysis'
				},
				
			]
		}
	]
}


const GoodsTypesInfo = [
	{
		name: '大类别',
		typeID: '1'
	},
	{
		name: '小类别',
		typeID: '2'
	}
];

const SUPER_TYPE_ID = '1';
const SUB_TYPE_ID = '2';

module.exports = {
	ModulesInfo,
	GoodsTypesInfo,
	SUPER_TYPE_ID,
	SUB_TYPE_ID
}