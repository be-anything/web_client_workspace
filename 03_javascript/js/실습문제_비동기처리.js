
document.querySelector('#btn').addEventListener('click', async () => {
    const imgWrap = document.querySelector('.img-wrapper');
    imgWrap.innerHTML = '';

    const api = 'https://dog.ceo/api/breeds/image/random';
    const {data : {message}} = await axios(api);
    console.log(message);

    const img = document.createElement('img');
    img.src = message;
    imgWrap.append(img);
});