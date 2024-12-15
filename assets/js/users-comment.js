const userCommentTitlesElement = document.querySelectorAll('.article-comment-text'),
userNamesElements = document.querySelectorAll('.usersname');
const articleElements = document.querySelectorAll('.user-comment-box');
const displayUserComments = () => {
    fetch('assets/js/user_comment.json')
    .then(res => res.json())
    .then(data => {
        const UserCommentDetails = data[0];
        const userNames = Object.values(UserCommentDetails.Usernames),
        userCommentTitles = Object.values(UserCommentDetails.UserComments);
        userCommentTitlesElement.forEach((ele, index) => {
            ele.textContent =  `'"${userCommentTitles[index]}"'`;
        });
        userNamesElements.forEach((ele, index) => {
            ele.textContent =  userNames[index];
        }); 
        articleElements.forEach(art => {
            art.addEventListener('click', () => window.open("https://x.com/davistheweb"));
        });
    });
};
displayUserComments();