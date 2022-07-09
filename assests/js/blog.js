let blogs = [];

function addBlog(event) {
    event.preventDefault()

    let name = document.getElementById('input-project-name').value;
    let start = document.getElementById('input-start-date').value;
    let end = document.getElementById('input-end-date').value;
    let description = document.getElementById('input-description-blog').value;
    let image = document.getElementById('input-file-img');

    image = URL.createObjectURL(image.files[0]);

    // let node = document.getElementById('node-js').checked;
    // let react = document.getElementById('react-js').checked;
    // let next = document.getElementById('next-js').checked;
    // let typeScript = document.getElementById('typeScript').checked;
    
    let technologies = document.querySelectorAll('.technologies');

    let blog = {
        name,
        start,
        end,
        description,
        image
    };

    blogs.push(blog);
    renderBlogs();
};

function renderBlogs() {

    let containerBlogs = document.getElementById('myProject');
    containerBlogs.innerHTML = "";

    for (let i = 0; i < blogs.length; i++) {
        
        containerBlogs.innerHTML += `
                <div class="cardMyProject">
                    <div>
                        <img src="${blogs[i].image}" alt="">
                    </div>
                    <div>
                        <h3>${blogs[i].name}</h3>
                        <p>Duration</p>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <p>${blogs[i].description}</p>
                    </div>
                    <div class="icon-lang">
                        <img src="${blogs[i].node}" alt="">
                        <img src="${blogs[i].react}" alt="">
                        <img src="${blogs[i].next}" alt="">
                        <img src="${blogs[i].typeScript}" alt="">
                    </div>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>`
        
    };

};