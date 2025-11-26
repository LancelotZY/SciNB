function updateFooter (subject){
    let element1 = document.getElementById('content1')
    let element2 = document.getElementById('content2')
    

    switch (subject){
        case "全部":
            element1.textContent = "对于未知的好奇与真理的执着，让我们拥有不断前进的动力";
            element2.textContent = '全部';
            break;
        case '本周热点':
            element1.textContent = "让我们看看这周，探索欲将我们引向何方吧";
            element2.textContent = '本周热点';
            break;
        case '原创文学':
            element1.textContent = "在这里我们欢迎每一个拥有创作欲的笔者展示他们心目中的璨烂星河";
            element2.textContent = '原创文学';
            break;
        case '经典读物':
            element1.textContent = '当时间冲刷过尘世，带走了悬浮的尘埃，留下了闪耀的宝藏';
            element2.textContent = '经典读物';
            break;
    }
}