import {useEffect, useState} from "preact/hooks";

export default function ExternalData({link, property}: {link: string, property: string}) {
    const [data, setData] = useState<string | undefined>()

    useEffect(() => {
        fetch(link).then((res) => {
            if (!res.ok) {
                throw new Error("Could not load data")
            }
            res.json().then((data) => {
                setData(data[property])
            })
        })
    }, [])

    return (
        <span title={"As of right now!"} className={"underline"}>{ data ? data : "Waiting..."}</span>
    )
}