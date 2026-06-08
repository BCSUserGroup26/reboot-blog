const chapters = [
{
name:"Chapter 1",
progress:100
},
{
name:"Chapter 2",
progress:0
},
{
name:"Chapter 3",
progress:0
},
{
name:"Chapter 4",
progress:0
},
{
name:"Chapter 5",
progress:0
},
{
name:"Chapter 6",
progress:0
},
{
name:"Chapter 7",
progress:0
},
{
name:"Chapter 8",
progress:0
},
{
name:"Final Touches",
progress:0
}
];

document.addEventListener("DOMContentLoaded",()=>{

const container =
document.getElementById("progress-container");

if(!container) return;

chapters.forEach(chapter=>{

const row =
document.createElement("div");

row.className =
"progress-row";

row.innerHTML = `
<span>
${chapter.name}
</span>

<div class="bar">
<div class="fill"
style="width:${chapter.progress}%">
</div>
</div>
`;

container.appendChild(row);

});

});
