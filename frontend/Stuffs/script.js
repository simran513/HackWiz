
const search=()=>{
    a=10
}

document.getElementById("form").addEventListener('submit',async(e)=>
{
    e.preventDefault()
    let val=(document.querySelector("#query").value);
    console.log(val);
    const url = `https://api.consumet.org/anime/zoro/${val}`;
    // console.log(url);
      try {
        const  data  = await axios.get(url);
        const info=data.data.results
        info.map(({title})=>{
            document.querySelector(".hero").append(document.createElement("div").value=title)
            console.log(title);
        })
        // console.log(data);
        // return data;
      } catch (err) {
        throw new Error(err.message);
      }
})

