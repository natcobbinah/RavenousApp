const apiKey = "iJT8uvomB80kzqDs-VVBd7_vKM05kSJFODvrdrYY2chg_bks5yHAQqzIUhTYNKf9G_K1QqzPKRQ3w0a_xLLlPBSb70w2GNWitW0_IrB_Tt4X51J6Estajieh32BQYnYx";
const businessesBaseUrl = "https://api.yelp.com/v3/businesses/search?";
//const corsAnyWhereHerokuBuildUrl = "https://enigmatic-gorge-40032.herokuapp.com/";
const corsAnyWhereHerokuBuildUrl = "https://cors-anywhere.herokuapp.com/";

const search = async (term, location, sortBy) => {
    const response = await fetch(`${corsAnyWhereHerokuBuildUrl}${businessesBaseUrl}term=${term}&location=${location}&sort_by=${sortBy}`,
        {

            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        });
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        })
        );
    }
}

export const Yelp = {
    search: search,
};