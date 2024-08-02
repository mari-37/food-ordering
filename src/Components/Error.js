import React from "react" ;
import { useRouteError } from "react-router-dom";

const Error=()=>{
    return(
        <div className="error-page">
            <h2>oops!something went wrong ☹️</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <h3>
            Sure! Here are some ideas for error pages for your restaurant website:

                    ### 404 Error - Page Not Found
                    ---

                    **Oops! Looks like you're lost.**

                    We're sorry, but the page you're looking for doesn't exist. It might have been moved, deleted, or perhaps it never existed at all. But don't worry, we've got plenty of delicious options for you to explore!

                    **What can you do?**
                    - **Return to the [Homepage](#)** and start fresh.
                    - **Check out our [Menu](#)** to see what delicious dishes we offer.
                    - **Contact Us** if you need further assistance.

                    **Feeling hungry?** Why not make a reservation and join us for a meal? We promise you won't be disappointed!

                    ---

                    ### 500 Error - Internal Server Error
                    ---

                    **Yikes! Something went wrong on our end.**

                    It seems we've encountered an unexpected error. Our team is working hard to fix it. In the meantime, why not take a look at some of our other pages?

                    **Here are some suggestions:**
                    - **Visit our [Homepage](#)** to see what's new.
                    - **Browse our [Menu](#)** to find your next favorite dish.
                    - **Contact Us** if you need immediate assistance.

                    We apologize for the inconvenience and appreciate your patience. We hope to see you soon!

                    ---

                    ### 403 Error - Forbidden
                    ---

                    **Access Denied!**

                    It looks like you don't have permission to access this page. If you believe this is a mistake, please contact our support team.

                    **In the meantime, you can:**
                    - **Return to the [Homepage](#)** and explore other sections.
                    - **Check out our [Menu](#)** to see what we have to offer.
                    - **Contact Us** for further assistance.

                    Thank you for understanding!

                    ---

                    ### 503 Error - Service Unavailable
                    ---

                    **We're currently down for maintenance.**

                    Our website is undergoing some scheduled maintenance. We'll be back up and running shortly. Thank you for your patience!

                    **In the meantime:**
                    - **Visit our [Homepage](#)** once we're back online.
                    - **Browse our [Menu](#)** to plan your next meal.
                    - **Contact Us** if you have any urgent inquiries.

                    We apologize for any inconvenience and appreciate your understanding.

                    ---

                    Feel free to customize these messages to better fit your restaurant's tone and style! 😊🍽️
            </h3>
        </div>
    )
};

export default Error ;