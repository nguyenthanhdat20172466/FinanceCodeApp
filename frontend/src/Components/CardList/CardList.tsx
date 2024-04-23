import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList : React.FC<Props> = (props: Props):  JSX.Element => {
    return <div>
        <Card companyName="Apple" ticket="AAPL" price={100}/>
        <Card companyName="Samsung" ticket="AAPL" price={200}/>
        <Card companyName="Xiaomi" ticket="AAPL" price={300}/>

    </div>
};

export default CardList;