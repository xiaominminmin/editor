// win.onload=function(){
function HTMLDeCode(str)
{
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g,"&");
    s = s.replace(/</g,"<");
    s = s.replace(/>/g,">");
    s = s.replace(/ /g," ");
    s = s.replace(/'/g,"\'");
    s = s.replace(/"/g,"\"");
    return s;
}
function HTMLEnCode(str)
{
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g,"&");
    s = s.replace(/</g,"<");
    s = s.replace(/>/g,">");
    s = s.replace(/ /g," ");
    s = s.replace(/\'/g,"'");
    s = s.replace(/\"/g,"\"");
    return s;
}

function alert_(content){
    layui.use('layer',function(){
        var layre=layui.layer;
        layer.alert(content)
    });
}
function msg_qunding(con,fun,fun2){
    var res;
    layui.use('layer', function(){
        layer.confirm(con, {
            btn: ['确认','取消'] //按钮
        }, function(){
            fun();
        }, function(){
            fun2();
        });
    });
    return res;
}

function space(str){
    var reg=/<p>(<br>|<p>|<\/p>)*<br><\/p>/gi;
    var str=str.replace(reg, '<p><br></p>');
    return str;
}
function htmlspecialchars(str){
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#039;');
    return str;
}
function htmlspecialchars1(str){
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#039;/g, '\'');
    return str;
}

//图片切换渐变
function jbimg(tab,img2){
    // $(tab).css('opacity','');
    // setInterval(colorLiner,20)
}
//活动探弹框获得卡片
function activity_get(length){
    var ind = length-1;
    // $('.activity_box').removeClass('block').eq(ind).fadeIn(1000);
    $('.activity_box').each(function(index) {
        if(index==ind){
            var shenka = $(this).find('.activity_box_tit').html();
            if($(this)[0].style.display=='block'){
                $(this).find('.activity_box_con2').html('获得两张“'+shenka+'”神器卡');
            }else{
                $(this).fadeIn(1000);
            }
        }
    });
}
function activity_main_close(){
    $('.activity2').css('display','none');
}
function activity_main_block(){
    $('.activity2').css('display','block');
}

//调用右提示函数
function zhiliao_layer(a,b){
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.tips(a, b);
    });
}
function zhiliao_layerzuo(a,b){
    layui.use('layer', function(){
        layer.tips(a, b, {
            tips: [4, '#000']
        });
    });
}
function layuimsg(a){
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.msg(errors[a]);
    });
};
//弹出登录提示
function loginAlert(this_){
    $('.tishidenglu').css('display','block');
    $('.jubao').off('click');
    $('.fankui_d').off('click');
    $('.ppc_a3').off('click');
    $('.search_btn').off('click');
    $(this_).off('click');
}
//认证弹框
function renzhengAlert(){
    $('.tishirenzheng_').css('display','block');
    $('.tishirenzheng_ .tishidenglu1 span').click(function(){
        $('.tishirenzheng_').css('display','none');
    });
    $('.jubao').off('click');
    $('.fankui_d').off('click');
    $('.ppc_a3').off('click');
}
//关闭弹框
function guanbi(this_,parent_){
    this_.click(function(){
        this_.parents(parent_).css('display','none');
        $('body').css('overflow','scroll');
    });
};
function block(obj,objParent){
    obj.on('click',function(){
        $('body').css('overflow','hidden');
        objParent.css('display','block');
    })
}
function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//获取后台注册分享码
function shareGet(){
    var res;
    $.ajax({
        'url':'/user/sharereg',
        'type':'get',
        'data':{},
        'success':function(data){
            res = data;
        },
        'async':false
    });
    return res;
}
function msgcontent(c){
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.msg(c);
    });
}
function msgcontent1(c,length){
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.msg(c,{icon:length});
    });
}
function Trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function fuzhi(){
    var Url2=document.getElementById("biao1");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    msgcontent("已复制好，可贴粘！");
}
//发送标签排序 @cateids 所有选择标签的cateid每个id之间用 , 分割 例: 1,2,3,5
function cateSort(cateids){
    $.post('/user/cateSort',{'cates':cateids},function(result){
        if(result==0){
            msgcontent('系统繁忙请稍后再试');
        }else if(result==1){

        }
    });
}
function uc_biaoqian_follow(_biaoqian_id, _biaoqian_focus){
    $.post("/user/foLabel", {'cateid':_biaoqian_id, 'type':_biaoqian_focus}, function(result){
    });
}
function stopBubble1(e){
    debugger
    var e=e||window.event;
    if ( e.stopPropagation) {//非IE浏览器
        e.stopPropagation();// msgcontent('1')
    } else {//IE浏览器
        window.event.cancelBubble = true;//msgcontent('2')
    }
}

function getEvent(){
    if(window.event)    {return window.event;}
    func=getEvent.caller;
    while(func!=null){
        var arg0=func.arguments[0];
        if(arg0){
            if((arg0.constructor==Event || arg0.constructor ==MouseEvent
                || arg0.constructor==KeyboardEvent)
                ||(typeof(arg0)=="object" && arg0.preventDefault
                && arg0.stopPropagation)){
                return arg0;
            }
        }
        func=func.caller;
    }
    return null;
}
//阻止冒泡
function stopBubble()
{
    var e=getEvent();
    if(window.event){
        //e.returnValue=false;//阻止自身行为
        e.cancelBubble=true;//阻止冒泡
    }else if(e.preventDefault){
        //e.preventDefault();//阻止自身行为
        e.stopPropagation();//阻止冒泡
    }
}
function formsubmit(this_){
    $('fromTopic').submit();
}
/*var handlerPopup = function (captchaObj) {
 // 成功的回调
 captchaObj.onSuccess(function () {
 var validate = captchaObj.getValidate();
 $.ajax({
 url: "/user/ttt", // 进行二次验证
 type: "post",
 dataType: "json",
 data: {
 geetest_challenge: validate.geetest_challenge,
 geetest_validate: validate.geetest_validate,
 geetest_seccode: validate.geetest_seccode
 },
 success: function (data) {
 if (data && (data.status === "success")) {
 var username=$('.dl_main_yonghuming').val();
 var password=$('.dl_main_xinmima').val();
 var vcode=$('.dl_main_yanzheng').val();
 var rurl=$('.rurl').val();
 doLogin(username,password,vcode,rurl);
 } else {
 $(document.body).html('<h1>登录失败</h1>');
 }
 }
 });
 });
 $(".zhiliao_denglu").click(function () {
 var username=$('.dl_main_yonghuming').val();
 var password=$('.dl_main_xinmima').val();
 var vcode=$('.dl_main_yanzheng').val();
 var rurl=$('.rurl').val();
 //用户名验证
 if (!reg4.test(username)){
 zhiliao_layer(errors[0],'.dl_main_yonghuming');
 createCode();
 return false;
 };
 //密码验证
 if (!reg3.test(password)){
 zhiliao_layer(errors[4],'.dl_main_xinmima');
 createCode();
 return false;
 };
 //验证码验证
 if (vcode==''){
 zhiliao_layerzuo(errors[25],'.dl_main_yanzheng');
 createCode();
 return false;
 };
 captchaObj.show();
 });
 // 将验证码加到id为captcha的元素里
 captchaObj.appendTo("#popup-captcha");
 // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
 };*/
var handlerPopupMobile = function (captchaObj) {
    $('#login_y').css('display','none');
    // 将验证码加到id为captcha的元素里
    captchaObj.appendTo("#popup-captcha-mobile");
    var reFre = function(){
        var validate = captchaObj.getValidate();
        $.ajax({
            url: "/user/ttt", // 进行二次验证
            type: "post",
            dataType: "json",
            data: {
                // 二次验证所需的三个值
                type: "mobile",
                geetest_challenge: validate.geetest_challenge,
                geetest_validate: validate.geetest_validate,
                geetest_seccode: validate.geetest_seccode
            },
            success: function (data) {
                if (data && (data.status === "success")) {
                    var username=$('.dl_main_zhanghao').val();
                    var password=$('.dl_main_xinmima').val();
                    var rurl=$('.rurl').val();
                    if(reg5.test(username)){
                        $('.loading').addClass('block');
                        $.post('/third/EngineerLogin',{'number':username,'password':password},function(resData){
                            $('.loading').addClass('none');
                            switch(resData){
                                case '5':
                                    msgcontent('请求方式错误');
                                    break;
                                case '1':
                                    window.location.href='/index';
                                    break;
                                case '0':
                                    msgcontent('系统出错，请稍后再试');
                                    break;
                                case '6':
                                    msgcontent('用户名或密码不正确');
                                    break;
                            }
                        });
                        return false;
                    }
                    //用户名验证
                    if (!reg4.test(username)){
                        captchaObj.onRefresh(reFre);
                        zhiliao_layer(errors[0],'.dl_main_zhanghao');
                        return false;
                    };
                    //密码验证
                    if (!reg3.test(password)){
                        captchaObj.onRefresh(reFre);
                        zhiliao_layer(errors[4],'.dl_main_xinmima');
                        return false;
                    };
                    var username=$('.dl_main_zhanghao').val();
                    var password=$('.dl_main_xinmima').val();
                    var rurl=$('.rurl').val();
                    var Vcode=$('.dl_main_yanzheng').val();
                    doLogin(username,password,rurl,Vcode);
                } else {
                    $(document.body).html('<h1>登录失败</h1>');
                }
            }
        });
    }
    function resetFFF(){
        captchaObj.refresh();
    }
    var CllThis = function () {
        var validate = captchaObj.getValidate();
        $.ajax({
            url: "/user/ttt", // 进行二次验证
            type: "post",
            dataType: "json",
            data: {
                // 二次验证所需的三个值
                type: "mobile",
                geetest_challenge: validate.geetest_challenge,
                geetest_validate: validate.geetest_validate,
                geetest_seccode: validate.geetest_seccode
            },
            success: function (data) {
                if (data && (data.status === "success")) {
                    /*var username=$('.dl_main_zhanghao').val();
                     var password=$('.dl_main_xinmima').val();
                     var rurl=$('.rurl').val();
                     //用户名验证
                     if (!reg2.test(username) && !reg.test(username)){
                     resetFFF();
                     zhiliao_layer(errors[0],'.dl_main_zhanghao');
                     return false;
                     };
                     //密码验证
                     if (!reg3.test(password)){
                     resetFFF();
                     zhiliao_layer(errors[4],'.dl_main_xinmima');
                     return false;
                     };
                     var username=$('.dl_main_zhanghao').val();
                     var password=$('.dl_main_xinmima').val();
                     var rurl=$('.rurl').val();
                     doLogin(username,password,rurl);*/
                } else {
                    $(document.body).html('<h1>登录失败</h1>');
                }
            }
        });
    };
    //拖动验证成功后两秒(可自行设置时间)自动发生跳转等行为
    captchaObj.onSuccess(CllThis);

    // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
};
var handlerEmbed = function (captchaObj) {
    $("#embed-submit").click(function (e) {
        var validate = captchaObj.getValidate();
        if (!validate) {
            $("#notice")[0].className = "show";
            setTimeout(function () {
                $("#notice")[0].className = "hide";
            }, 2000);
            e.preventDefault();
            var username=$('.dl_main_yonghuming').val();
            var password=$('.dl_main_xinmima').val();
            var vcode=$('.dl_main_yanzheng').val();
            var rurl=$('.rurl').val();
            doLogin(username,password,vcode,rurl);
        }
    });
    // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
    captchaObj.appendTo("#embed-captcha");
    captchaObj.onReady(function () {
        $("#wait")[0].className = "hide";
    });
    // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
};
/**
 * #验证密码需要根据某个条件来验证密码是否正确。
 * @type string 验证密码条件的类型，类型分为username(用户名)、phone(手机)、email(邮箱)
 * @value string|int 验证条件值，如果type是username此处应该为用户名而后台根据此用户名检测输入框内的密码是否与此用户密码匹配
 * @password string 固定值 'password'
 * @password string 输入框内的密码值 isPassword
 */
function isPassword(type,value,password,password1){
    var res;
    $.ajax({
        'url':'/user/isPassword',
        'data':{'type':type,'value':value,password:password1,'type2':password},
        'success':function(data){
            res = data;
        },
        'type': 'POST',
        'async':false
    });
    return res;
}

//注册  @phone手机可以为空 @email邮箱可以为空 @password 手机和邮箱必选其一
function sendEnroll(phone1,email1,password,share,type,pcode){
    $('.loading').addClass('block');
    var res;
    $.ajax({
        url:'/user/register',
        data:{'phone':phone1,'email':email1, 'password':password,'share':share,'type':type,'pcode':pcode},
        success:function(data){
            res = data;
            if(res == 7||res ==8){
                layuimsg(res);
                setTimeout(function(){
                    window.location.href = '/user/login';
                },2000);
            }else{
                layuimsg(res);
            }
        },
        'type': 'post',
        'async':true
    });
    $('.loading').removeClass('block');
}
//找回密码 @用户名 @email 此处表示手机或邮箱，不限于必须邮箱
/*function backPass(username,email){
 var res;
 $('.loading').addClass('block');
 $.ajax({
 url:'/user/redispass',
 data:{'username':username,'email':email},
 success:function(data){
 var res=data;
 var reg=/Could not authenticate/;
 if (res == 12){
 layuimsg(res);
 setTimeout(function(){
 window.location.href='/user/login';
 },2000);
 }else if (reg.test(res)){
 layuimsg('请求超时,服务器响应失败,请稍后重试');
 }else{
 layuimsg(res);
 }
 },
 'async':true,
 'type':'post'
 });
 $('.loading').removeClass('block');
 }*/
function backPass(email,phone,type,pcode){
    $('.loading').addClass('block');
    var res;
    $.ajax({
        url:'/user/redispass',
        data:{'phone':phone,'email':email,'type':type,'pcode':pcode},
        success:function(data){
            var res=data;
            var reg=/Could not authenticate/;
            if (res.success == 12){
                $('.loading').removeClass('block');
                layuimsg(res.success);
                setTimeout(function(){
                    window.location.href='/index/index';
                },2000);
            }else if (reg.test(res)){
                $('.loading').removeClass('block');
                layuimsg('请求超时, 服务器响应失败, 请稍后重试');
            }else if(res.success == 34){
                $('.loading').removeClass('block');
                setTimeout(function(){
                    window.location.href=res.url;
                },2000);
            }else if(res.success == 41){
                $('.loading').removeClass('block');
                msgcontent('验证码输入已达上限！');
            }else{
                $('.loading').removeClass('block');
                layuimsg(res.success);
            }
        },
        'async':true,
        'type':'post',
        'dataType':'json'
    });

}

//发送手机验证码
function PostPhoneCode(phone){
    var res;
    $.ajax({
        'url':'/user/PostPhoneCode',
        'data':{'phone':phone},
        'success':function(data){
            res = data;
        },
        'type': 'POST',
        'async':false
    });
    return res;
}

//判断验证码是否正确
function isPhoneCode(code){
    var res;
    $.ajax({
        'url':'/user/isPhoneCode',
        'data':{'regcode':code},
        'success':function(data){
            res = data;
        },
        'type': 'POST',
        'async':false
    });
    if (res==0){
        return false;
    }else if(res==1){
        return true;
    }
}
//登录
function doLogin(username,password,rurl,Vcode){
    $('.loading').addClass('block');
    var reg=/^[0-9]*$/;
    var res;
    $.ajax({
        url:'/user/dologin',
        data:{'username':username,'password':password,'rurl':rurl,'Vcode':Vcode},
        'async':true,
        'type':'post',
        success:function(data){
            res=data;
            if (!reg.test(res)){
                // if(window.localStorage){
                //     var str=window.localStorage;
                // }else{
                //     alert('亲，是时候升级你的老古董了');
                // }
                // if ($('#dl_main_jizhu').attr('checked')){
                //     // alert(1)
                //     str.setItem('user1',username);
                //     str.setItem('pass1',password);
                // }else{
                //     str.removeItem('user1');
                //     str.removeItem('pass1');
                // }
                if ($('#dl_main_jizhu').attr('checked')){
                    setCookie('user',username);
                    setCookie('pass',password);
                }else{
                    delCookie('user');
                    delCookie('pass');
                }

                window.location.href=res;
            }else if(res == '25'){
                layuimsg(res);
                $('.dl_main_img').click();
            }else{
                $('#login_C').html('');
                $('.dl_main_img').click();
                createCode();
                layuimsg(res);
            }
        }
    });
    $('.loading').removeClass('block');
    return res;
}

//重置验证
function reCode(){
    $.ajax({
        'url':'/user/reCode',
        'data':{},
        'success':function(data){
            res = data;
        },
        'type': 'POST',
        'async':false
    });
}
//验证码是否正确 @验证码框内value
function VcodeIs(codes){
    var res;
    $.ajax({
        'url':'/user/VcodeIs',
        'data':{'Code':codes},
        'success':function(data){
            res = data;
        },
        'type': 'GET',
        'async':false
    });
    if(res == 1){
        return true;
    }else{
        zhiliao_layerzuo(errors[25],'.dl_main_yanzheng');
        // $('.dl_main_img').click();
        // $('.dl_main_img').attr('src','/Vcode.php?'+Math.random();)
    }
}
//修改密码 @用户名 @当前密码 @密码
function editpass(password,pass){
    $('.loading').addClass('block');
    var res;
    $.ajax({
        'url':'/user/ModifyPass',
        'data':{'password':password,'pass':pass},
        'success':function(data){
            res = data;
            if(res == 16){
                layuimsg(res);
                setTimeout(function(){
                    window.location.href='/index/index';
                },2000);
                $('.loading').removeClass('block');
            }else if(res == 37){
                msgcontent('旧密码错误请确认！');
                $('.loading').removeClass('block');
            }else{
                zhiliao_layer(errors[res],'.dl_main_yanzheng');
                $('.loading').removeClass('block');
            }
        },
        'async':true,
        'type':'post'
    });
}

function isTimeOk(){
    $.post('/winning/isTimeOk',{},function(result){

    },'json');
}

function edwang(idid,imgsrc,randomDirCode, flag){
    var editor = new wangEditor(idid);
    // 上传图片
    editor.config.uploadImgUrl = imgsrc;
    editor.config.uploadImgFileName = 'file'

    editor.config.menus = [
        'source',
        '|',
         'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        '|',
        'quote',
        'unorderlist',
        'orderlist',
        '|',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        '|',
        // 'emotion',
        'img',
        // 'insertcode',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ];

    editor.config.emotions = {
        // 支持多组表情

        // 第一组，id叫做 'default'


        // 第二组，id叫做'weibo'
        'weibo': {
            title: '选择前言icon',  // 组名称
            data: [
            {
                icon : "/images/icon1.png",
                value : "[icon1]"
            },
            {
                icon : "/images/icon2.png",
                value : "[icon2]"
            },{
                icon : "/images/icon3.png",
                value : "[icon3]"
            },
            {
                icon : "/images/pause.jpg",
                value : "[icon4]"
            }
            ]
        }
        // 下面还可以继续，第三组、第四组、、、
    };
    // onchange 事件
    editor.onchange = function () {
        var contet = this.$txt.html();
        $('input[name="'+idid+'"]').val(contet);
    };
    var Params = {}
    editor.config.uploadParams = Params
    editor.config.pasteFilter = false;
    editor.config.withCredentials = false;
    editor.create();
}

// }
