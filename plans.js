import supabase from "./config.js";

/**
 *
 * @returns {Promise<{error}|GetResult<any, any, "travel_plans", R | unknown, "*">[]>}
 */
export async function getPlans() {

    try {
        let { data, error } = await supabase
          .from('travel_plans')
          .select('*')
        return data;

        console.log(data)

        if (error) {
            throw error;
        }

    } catch (error) {
        console.log("Error adding plan:", error);
        return {error: error.message};
    }
}

/**
 *
 * @param id
 * @returns {string}
 */
export function deletePlans(id){
    return `deleting plan with ${id}`
}

/**
 *
 * @param id
 * @param content
 * @returns {string}
 */
export function updatePlans(id, content){
    return `updating plan with ${id}`
}
