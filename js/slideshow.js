/* 
 * Simple slideshow
 * Written by Michael Davis
 * 
 * How to use: Put all pictures for slides in containers of class "sources"
 * Since pictures are displayed in reverse-load-order (last
 * loaded on top), the script needs to iterate backwards in order to
 * properly cycle through the pictures.
 */
var pics = $(".sources img");
    var max = pics.length-1;
    var i1 = max;
    var i2 = max;
    // has to run backwards because of picture load order
    function changepix() {
        (i2 <=0)? i2=max : i2--;
        pics.eq(i2).fadeTo(500,1);
        pics.eq(i1).fadeTo(500,0);
        (i1 <=0)? i1=max : i1--;    
    }
    setInterval("changepix()", 4500);
