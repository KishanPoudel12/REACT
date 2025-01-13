import React, { useEffect, useState } from "react";
function ScrollBar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrollBar,setScrollBar]=useState(0)
  async function fetchApi() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const Data = await res.json();

      if (Data) {
        setLoading(false);
        setData(Data.products);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  function handleScroll(){
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )

    let scrollValue=document.documentElement.scrollTop - document.body.scrollTop
    console.log(scrollValue)
    let height=document.documentElement.scrollHeight - document.documentElement.clientHeight
    console.log(height)

    setScrollBar((scrollValue/height)*100)
  }
  console.log('Percentage=',scrollBar)

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{window.removeEventListener('scroll',handleScroll)}
  },[])

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <h1>Loading ! Please Wait...</h1>;
  }

  if (error) {
    return <h1> Error :{error}</h1>;
  }

  return (
    <div className="scrollBarHeader">
      <div className="scrollContent" style={{ backgroundColor:'green', height:'3px' , color:'blue' , width:`${scrollBar}%`  ,position:'fixed',top:0 ,left:0}}>
      </div>
      <div>
        {data && data.length > 0
          ? data.map((item, ind) => <h1 key={ind}> {item.title}</h1>)
          : null}
      </div>
    </div>
  );
}
export default ScrollBar;
