fetch("./blogs.json")
.then(response => response.json())
.then(blogs => {

    const container =
        document.getElementById("blog-list");

    if(!container) return;

    blogs.forEach(blog => {

        const card =
            document.createElement("a");

        card.className =
            "blog-card";

        card.href =
            blog.url;

        card.innerHTML = `
            <img src="${blog.thumbnail}">
            <div class="blog-info">
                <h3>${blog.title}</h3>
                <p>${blog.date}</p>
            </div>
        `;

        container.appendChild(card);

    });

});
