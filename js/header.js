let headerEl = document.getElementsByClassName('header')[0];

headerEl.innerHTML=`
<header>
<h1><a href="./index.html"><img src="./images/logoB.svg" alt="logo"></a></h1>
<nav>
    <ul class="depth1">
        <li><a href="./index.html">HOME</a></li>
        <li><a href="./about.htm">ABOUT</a></li>
        <li class="nav_works"><a href="./works.html">WORKS</a>
            <ul class="depth2">
                <li><a href="./works.html#individual">Individual</a></li>
                <li><a href="./works.html#team">Team</a></li>
            </ul>
        </li>
    </ul>
</nav>   
</header>`
