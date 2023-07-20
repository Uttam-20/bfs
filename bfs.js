var k=0;
for(let i=0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
var inp=document.createElement("button");
var box=document.getElementById("box");
inp.style.width="100px";
inp.style.height="40px";
inp.value=k++;
box.appendChild(inp);
    }
}
var queue=[];
var vis=[[]];
for(let i=0;i<=10;i++)
{
    for(let j=0;j<=10;j++)
      {
        vis.push(false);
      }
}
function issafe(i)
{
    if(i<0 || i>=100 || vis[i]==true)
       return false;

    return true;
}
const nodes=document.getElementById("box").children;
function bfs()
{
    vis.shift();
    let val=prompt("Enter Start Node Number-(0-99)");
    
   queue.shift();
   val=parseInt(val);
    queue.push(val);
    vis[val]=true;
    let j=0;
    const num=[-10,10,-9,9,-11,11,-1,1];
    while(queue.length)
    {
        let x=queue.shift();
            
            setTimeout(function(){
                if(x==val)
                nodes[x].style.backgroundColor="red";
                else
                nodes[x].style.backgroundColor="yellow";
            },1000*j);
        for(let i=0;i<num.length;i++)
        {
            if(issafe(x+num[i]))
            {
                if(x%10==9)
                {
                    if(num[i]==1 || num[i]==-9 || num[i]==11)
                    continue;
                }
                if(x%10==0)
                {
                    if(num[i]==-1 || num[i]==9 || num[i]==-11)
                       continue;
                }
                queue.push(x+num[i]);
                vis[x+num[i]]=true;
            }
        }
        j++;
    }
}
var j=0;
function func(x,val)
{
    const num=[-10,10,-9,9,-11,11,-1,1];
    setTimeout(function(){
        if(x==val)
        nodes[x].style.backgroundColor="red";
        else
        nodes[x].style.backgroundColor="yellow";
    },1000*j);
    j++;
    vis[x]=true;
    for(let i=0;i<num.length;i++)
    {
        if(issafe(x+num[i]))
        {
            if(x%10==9)
                {
                    if(num[i]==1 || num[i]==-9 || num[i]==11)
                    continue;
                }
                if(x%10==0)
                {
                    if(num[i]==-1 || num[i]==9 || num[i]==-11)
                       continue;
                }
            func(x+num[i],val);
        }
    }

}
function dfs()
{
    let val=prompt("Enter Start Node(0-99)");
    val=parseInt(val);
    func(val,val);
}