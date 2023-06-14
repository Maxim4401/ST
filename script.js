var trees = ["https://jasmineschut.ca/wp-content/uploads/2020/12/tree-1024x576.jpg","https://jasmineschut.ca/wp-content/uploads/2020/12/tree-1024x576.jpg","https://cdn.shopify.com/s/files/1/0513/3428/3424/products/catalpa_new.jpg?v=1626184465"];
var reasons = ["Trees Provide oxegen","Trees make oxegen for max of 10 people"];
var i = 0;
function ci() {
    document.getElementById("img1").src=trees[i];
    document.getElementById("p1").innerHTML=reasons[i];
    i++;
    document.getElementById("a1").play();
}