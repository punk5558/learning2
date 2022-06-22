export default function handler(req, res) {
  // get the tokenId from the query params
  const tokeId = req.query.tokenId;

  // as all the images are uploaded on github, we can extract the images from github directly
  const image_url =
  "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

  // the api is sending back metadata for a crypto dev
  // to make our collection compatible with opensea, we need to follow some metadata standards
  // when sending back the response from the api

  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  });




}
