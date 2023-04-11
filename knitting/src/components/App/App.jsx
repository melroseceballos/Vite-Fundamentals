import Header from '../../components/Header';
import Footer from '../Footer/index';

// Knit Stitches
const stitches = [
  {
    name: "Gable",
    image: "https://knittingfool.com/images/thumbs/G/Gable.jpg",
    totalStitches: "10 stitches plus 2 stitches",
    totalRows: "28 rows"
  },
  {
    name: "Garland",
    image: "https://knittingfool.com/images/thumbs/G/Garland.jpg",
    totalStitches: "7 stitches",
    totalRows: "16 rows"
  },
  {
    name: "Garter and Rib Check",
    image: "https://knittingfool.com/images/thumbs/G/GarterAndRibCheck.jpg",
    totalStitches: "10 stitches",
    totalRows: "12 rows"
  },
  {
    name: "Garter Basketweave",
    image: "https://knittingfool.com/images/thumbs/G/GarterBasketweave.jpg",
    totalStitches: "6 stitches plus 1 stitch",
    totalRows: "8 rows"
  },
  {
    name: "Garter Block",
    image: "https://knittingfool.com/images/thumbs/G/GarterBlock.jpg",
    totalStitches: "10 stitches plus 5 stitches",
    totalRows: "12 rows"
  }
]


function App() {
  return (
    <div className="App">
      <Header />
      <ul>
    {
        stitches.map(
            (stitch) => (
            <div class="stitch-cards">
            <h1 class="stitch-title">{stitch.name}</h1>
            <h3 class="totalStitch">{stitch.totalStitches}</h3>
            <h3>{stitch.totalRows}</h3>
            <img class="stitch-image" src= {stitch.image}/>
            </div>
            )
          
           
        )
    }
</ul>
      <Footer />
    </div>
  )
}

export default App