const categories = {
    technology: {
        title: "Technology",
        description: "Accessories for my devices",
        gifts: [
            { 
                title: "Laptop Screen Extender", 
                description: "Additional monitors for my laptop.", 
                links: [
                    {
                        text: "Quad Extender",
                        url: "https://a.co/d/07aJ20Hd"
                    }
                ] 
            },
            { 
                title: "Wireless Portable iPhone Charger", 
                description: "A wireless, portable, and magnetic charger for my iPhone. Additionally, an adhesive magnet ring would be needed for it to stick to my phone.", 
                links: [
                    {
                        text: "Charger",
                        url: "https://a.co/d/0ex2zZBJ"
                    },
                    {
                        text: "Adhesive Magnet Ring",
                        url: "https://a.co/d/0jgaQ7Vv"
                    }
                ] 
            }
        ]
    },
    candy: {
        title: "Candy",
        description: "Tasty treats for my stomach",
        gifts: [
            { 
                title: "Cookie Dough Bites", 
                description: "Original cookie dough bites, or some other interesting varient like red velvet, smores, or fudge brownie (also accessible through the link).", 
                links: [
                    {
                        text: "Original (and varients)",
                        url: "https://a.co/d/0eLmHqwu"
                    }
                ] 
            },
            { 
                title: "Freeze Dried Candy", 
                description: "Freeze dried candy corn, skittles, caramel m&ms, or anything else that seems interesting.", 
                links: [
                    {
                        text: "Freeze Dried Candy Corn",
                        url: "https://a.co/d/06I23F0T"
                    },
                    {
                        text: "Freeze Dried Skittles",
                        url: "https://a.co/d/0jhKNBUY"
                    },
                    {
                        text: "Freeze Dried Caramel M&Ms",
                        url: "https://a.co/d/08Hjqztq"
                    }
                ] 
            }
        ]
    },
    bike: {
        title: "Bike",
        description: "Improvements for my bike",
        gifts: [
            { 
                title: "Fenders", 
                description: "Fenders to keep my wheels from kicking up water and mud in wet weather.", 
                links: [
                    {
                        text: "SKS Bluemels B65 (black) Fender Set",
                        url: "https://sks-us.com/products/bluemels-fender-set-27-5-29-wheels?srsltid=AYCX9vI9RaRbOO2-yhG5Qy_Q9cppnuGkUmKuX4fVbOT6Qvr0W-POFbhm"
                    }
                ] 
            },
            { 
                title: "Bike Gloves", 
                description: "Gloves to keep my hands warm when biking on cold mornings (please include receipt, I may need to try multiple pairs).", 
                links: [
                    {
                        text: "Gloves (Men's Large)",
                        url: "https://a.co/d/0gOJilFU"
                    }
                ] 
            }
        ]
    },
    currency: {
        title: "Subscriptions and Currency",
        description: "Monetary-focused gifts for me",
        gifts: [
            { 
                title: "Spotify Subscription", 
                description: "Access to Spotify Premium for ad-free listening and audiobooks. There is no digital way to gift the subscription, but it is $12.99 per month.", 
                links: [] 
            },
            { 
                title: "Gift Cards", 
                description: "Matthew doesn't spend much. Gift cards force Matthew to not save the money for college payments and spend it on something more fun.", 
                links: [] 
            },
            { 
                title: "College Donation", 
                description: "Matthew doesn't spend much. Direct donations are saved and used for college payments.", 
                links: [] 
            }
        ]
    }
};

const grid = document.querySelector("#gift-grid");
if(grid) {
    const key = new URLSearchParams(window.location.search).get("category");
    const category = categories[key];

    if(!category) {
        document.querySelector("#category-title").textContent = "Category not found";
        document.querySelector("#category-description").textContent = "Return to the homepage to choose a category.";
        grid.innerHTML = '<p class="empty-state">No category matches that link.</p>';
    } else {
        document.title = `${category.title} - Wishlist`;
        document.querySelector("#category-title").textContent = category.title;
        document.querySelector("#category-description").textContent = category.description;

        if(!category.gifts.length) {
            grid.innerHTML = '<p class="empty-state">No gift ideas have been added yet.</p>';
        } else {
            category.gifts.forEach((gift) => {
                const card = document.createElement("article");
                card.className = "gift-card";

                const title = document.createElement("h2");
                title.textContent = gift.title;
                card.append(title);

                if (gift.description) {
                    const description = document.createElement("p");
                    description.textContent = gift.description;
                    card.append(description);
                }

                if (gift.links && gift.links.length > 0) {
                    gift.links.forEach((item) => {
                    const link = document.createElement("a");
                    link.className = "gift-link";
                    link.href = item.url;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.textContent = `${item.text} ↗`;
                    link.setAttribute(
                        "aria-label",
                        `${item.text} for ${gift.title} (opens in a new tab)`
                    );
                    card.append(link);
                    });
                }

                grid.append(card);
            });
        }
    }
}
