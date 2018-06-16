$(document).ready(function () {
    //检测ie 6789
    $("Thetitle").html("<!--menu begin--><div class='menu'><nav class='nav' id='topnav'><h1 class='logo'><a href='/index.html'>XSamsara博客</a></h1><li><a href='/index.html'>网站首页</a></li><li><a href='/about.html'>关于我</a></li><li><a href='/blogs/blog_1.html'>博客</a><ul class='sub-nav'><li><a href='/blogs/travels/blog_travels_1.html'>游记</a></li><li><a href='/blogs/classify/blog_classify_1.html'>题解</a></li><li><a href='/blogs/algorithm/blog_algorithm_1.html'>算法</a></li></ul></li><li><a href='/time.html'>时间轴</a></li><li><a href='/gbook.html'>留言</a></li><!--search begin--><div id='search_bar' class='search_bar'><form  id='searchform' action='[!--news.url--]e/search/index.php' method='post' name='searchform'><input class='input' placeholder='暂时无法使用...' type='text' name='keyboard' id='keyboard'><input type='hidden' name='show' value='title' /><input type='hidden' name='temid' value='1' /><input type='hidden' name='tbname' value='news'> <input type='hidden' name='Submit' value='搜索' /><span class='search_ico'></span> </form></div><!--search end--></nav></div><!--menu end--><!--mnav begin--><div id='mnav'><h2><a href='/index.html' class='mlogo'>XSamsara博客</a><span class='navicon'></span></h2><dl class='list_dl'><dt class='list_dt'><a href='/index.html'>网站首页</a> </dt><dt class='list_dt'><a href='/about.html'>关于我</a></dt><dt class='list_dt'><a href='/blogs/blog_1'>博客</a></dt><dd class='list_dd'> <ul><li><a href='/blogs/travels/blog_travels_1.html'>游记</a></li><li><a href='/blogs/classify/blog_classify_1.html'>题解</a></li> <li><a href='/blogs/algorithm/blog_algorithm_1.html'>算法</a></li></ul></dd><dt class='list_dt'><a href='/time.html'>时间轴</a></dt><dt class='list_dt'><a href='/gbook.html'>留言</a></dt></dl></div><!--mnav end-->");
    
    $("Besidebox").html("<div class='links'><h2 class='hometitle'>友情链接</h2><ul><b><strong>杭州二中dalao</strong></b><p><a href='https://justin-nickel-wu.tk/' target='_bank'>WLW的博客</a></p><b><strong>杭州学军dalao</strong></b><p><a href='https://blog.csdn.net/dyt_b' target='_blank'>DYT的博客</a></p><p><a href='https://skywt.cn/ ' target='_blank'>WT的博客</a></p><b><strong>衢州二中dalao</strong></b><p><a href='https://blog.csdn.net/xu0_zy ' target='_blank'>XZY的博客</a></p><p><a href='https://www.cnblogs.com/antiquality' target='_blank'>LX的博客</a></p><p><a href='https://blog.csdn.net/qq_41533592' target='_blank'>CHJ的博客</a></p><p><a href='https://ypcypc.github.io/' target='_blank'>YPC的博客</a></p><p><a href='https://blog.csdn.net/CHAOS_VOID' target='_blank'>ZQ的博客</a></p></ul></div><div class='guanzhu' id='follow-us'><h2 class='hometitle'>关注我！</h2><ul><li class='qq'><span><font color='#F3F3F3'>QQ号</font></span>915759345</li><li class='email'><span><font color='#F3F3F3'>邮箱帐号</font></span>915759345@qq.com</li></ul></div>");
    $("Theend").html("<footer><p><center>By <a href='/index.html'>XSamsara的个人博客</a> 生于2018.16.11</center></p></footer><a href='#' class='cd-top'>Top</a>")
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        window.scrollReveal = new scrollReveal({reset: true});
    }
    /*nav show or hide*/
    $('.nav>li').hover(function () {
        $(this).children('ul').stop(true, true).show(400);
    }, function () {
        $(this).children('ul').stop(true, true).hide(400);
    });
    /*search*/
    $('.search_ico').click(function () {
        $('.search_bar').toggleClass('search_open');
        if ($('#keyboard').val().length > 2) {
            $('#keyboard').val('');
            $('#searchform').submit();
        } else {
            return false;
        }
    });
    /*banner*/
    $('#banner').easyFader();

    /*topnav select*/
    var obj = null;
    var allMenu = document.getElementById('topnav').getElementsByTagName('a');
    // console.log(allMenu);
    obj = allMenu[0];
    for (i = 1; i < allMenu.length; i++) {
        if (window.location.href.indexOf(allMenu[i].href) >= 0) {
            obj = allMenu[i];
        }
    }
    obj.id = 'topnav_current';

    /*mnav dl open*/
    var oH2 = document.getElementsByTagName('h2')[0];
    var oUl = document.getElementsByTagName('dl')[0];
    oH2.onclick = function () {
        var style = oUl.style;
        style.display = style.display == 'block' ? 'none' : 'block';
        oH2.className = style.display == 'block' ? 'open' : '';
    };
    //菜单点击效果
    $('.list_dt').on('click', function () {
        $('.list_dd').stop();
        $(this).siblings('dt').removeAttr('id');
        if ($(this).attr('id') == 'open') {
            $(this).removeAttr('id').siblings('dd').slideUp();
        } else {
            $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
        }
    });

    //回到顶部
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });
    
    //设置固定关注我们

if ($('#follow-us')){
    var followUsPosition = $('#follow-us').offset().top;
    window.onscroll = function () {
        var nowPosition =  document.documentElement.scrollTop;
        if (nowPosition - followUsPosition > 0 ) {
            setTimeout(function () {
                $('#follow-us').attr('class','guanzhu gd');
            },150);
        }else {
            $('#follow-us').attr('class','guanzhu');
        }
    };
}
});