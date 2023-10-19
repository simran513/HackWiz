const axios = require("axios");
const postdata = async (req, res) => {
  try {
    const password = req.body.password;

    // const cpassword = req.body.confirmpassword
    // if(password === cpassword){
    //     const hashpassword=await bcrypt.hash(password, 10)
    //     const users = new User({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: hashpassword,
    //         confirmpassword: hashpassword
    //     })
    //     console.log(users)

    const hashpassword = await bcrypt.hash(password, 10);
    const users = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashpassword,
    });
    // password hash
    const createUser = await users.save();
    res.status(201).send(users);
    // }else{
    //     res.send("Passworda are not matching")
    // }
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
};

const validate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, users.password);

    if (isMatch) {
      res.status(201).send(users);
    } else {
      res.send("Wrong password");
    }
  } catch (e) {
    res.status(400).send("Invalid Email");
    console.log(e);
  }
};

const search = async (req, res) => {
  const { search } = req.body;
  const url = `https://api.consumet.org/anime/zoro/${search}`;

  try {
    const data = await axios.get(url);
    const info = data.data.results;
    // info.map(({title})=>{
    //     document.querySelector(".hero").append(document.createElement("div").value=title)
    //     console.log(title);
    // })
    console.log(info);
    res.json(info);
  } catch (err) {
    throw new Error(err.message);
  }
};

const news = async (req, res) => {
  // What are we gonna do here is that simply get all the news from the API and filter it out according to convenience
  const { news_title } = req.body;
  // const news_title="kingdom"
  const url = "https://api.consumet.org/news/ann/recent-feeds";

  const { data } = await axios.get(url);
  const news = data;
  let filter = [];
  // console.log(news);
  news.forEach((element) => {
    const word = element.title.split(" ")
    if(word.includes(news_title)){

      console.log(word.equalsIgnoreCase(news_title));
        filter.push(element)
    }

    // const regex =/Kingdoms/i;

    // const isWordPresent = regex.test(news_title);

    // if (isWordPresent) {
    //   console.log("The word is present in the sentence.");
    // } else {
    //   console.log("The word is not present in the sentence.");
    // }
  });
  //  const filter=news.map(({title})=>filter(title.includes(news_title)))
  res.json(filter);
  // console.log(filter.title);
};

module.exports = { postdata, validate, search, news };
