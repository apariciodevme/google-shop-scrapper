import { PageResult } from "@/typings"
import Link from "next/link"

type Props = {
    results: PageResult[];
    term: string;
}


const ResultsList = ({results, term}: Props) => {
  return (
    <div>
        {/*Sidebar*/}
    <div>
        {/*each page*/}
        {results.map((pageResult) => (
            <div className="space-y-2" key={pageResult.job_id}>
                {pageResult.content.results.filters?.map((filter, i) => (
                    <div key={i} className="p-5 border rounded-r-lg md:rounded-lg">
                        <p className="font-semibold">{filter.name}</p>
                        <div className="flex flex-col">
                        {filter.values.map((value) => (
                            <Link prefetch={false} href={`https://www.google.com${value.url}`}>{value.value}</Link>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>

        {/*main body*/}
        

    </div>
  )
}

export default ResultsList