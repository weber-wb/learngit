window.onload = function () {
    // 实例化  var vm = new Vue()
    new Vue({
        el: '#my',
        data: {
            checkAll: { name: '全选', check: false },
            lists: [{ name: '小米', check: true },
            { name: '华为', check: false },
            { name: '苹果', check: false },
            { name: 'vivo', check: false },
            { name: '小米', check: false }]
        },
        methods: {
            checkAllFn: function () {
                // this.lists.forEach(function(item){
                //     // Error in v-on handler: "TypeError: checkAll is not a function"  
                //     item.check = this.checkAll.check;                    
                // })

                // 方法1
                // var self = this;
                // self.lists.forEach(function(item){
                //     item.check = self.checkAll.check;
                // });

                // 方法2 箭头函数
                this.lists.forEach(item => {
                    item.check = this.checkAll.check;
                });

                // 方法3 实例化
                // vm.lists.forEach( item => {
                //     item.check = vm.checkAll.check;
                // });
            },
            activeChange: function () {
                // true的状态
                var activeTure = this.lists.filter(function (item) {  //过滤出为true的状态
                    return item.check == true;
                });

                // 判断 过滤选中的状态 == 数据总长度
                // if(activeTure.length == this.lists.length){
                //     this.checkAll.check = true;
                // }else{
                //     this.checkAll.check = false;
                // };

                // 三目运算
                this.checkAll.check = (activeTure.length == this.lists.length) ? true : false;
            }
        }
    })
}