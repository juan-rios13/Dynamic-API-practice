const postList = document.querySelector('.post-list');
const id = localStorage.getItem("id");


async function renderPosts (id){
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postData = await post.json();
    postList.innerHTML = postData.map(post => postHTML(post)).join('');
}



async function onSearchChange(event){
const id = event.target.value;
renderPosts(id);

}

function postHTML(post){
return `<div class="post__title">
  ${post.title}
</div>
<p class="post__body">
${post.body}
</p>
</div>`
}



renderPosts(id);