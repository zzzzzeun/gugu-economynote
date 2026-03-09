export default async function handler(req, res) {
  const apiKey = "f923a6c18ee647ef9eee5be98ae618b7";

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=경제 OR 금리 OR 환율 OR 증시&language=ko&sortBy=publishedAt&pageSize=5&apiKey=${apiKey}`
  );

  const data = await response.json();

  res.status(200).json(data);
}
