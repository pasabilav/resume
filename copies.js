let img = document.getElementsByTagName('tag');
    for(let i in img)
        {
            img[i].oncontextmenu = function()
            {return false;}
        }

let other = document.getElementsByTagName('tag');
    for(let i in other)
        {
            other[i].oncontextmenu = function()
            {return false;}
        }