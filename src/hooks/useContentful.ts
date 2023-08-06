import { createClient } from "contentful"

const useContentful = () => {

    const sortBySectionPos = () => {
        return function (elem1:any, elem2:any) {
          if (elem1.sectionPosition < elem2.sectionPosition) {
            return -1;
          } else if (elem1.sectionPosition > elem2.sectionPosition) {
            return 1;
          } else {
            return 0;
          }
        };
    }

    const client = createClient({
        space: import.meta.env.VITE_CONT_AT,
        accessToken: import.meta.env.VITE_CONT_SID,
        host: import.meta.env.VITE_CONT_HOST
    })

    const getSections = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "section",
            });
            console.log(entries);
            const sanitazedEntries =  entries.items.map((item)=> {
                return { ...item.fields }
            })
            const sortedEntries = sanitazedEntries.sort(sortBySectionPos());
            return sortedEntries
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    }

    return { getSections } 
}

export default useContentful