(() => {
  "use strict";

  // Change this one value when the live menu turns to a new season.
  const DEFAULT_SEASON = "autumn";

  // Optional preview override: menu.html?season=spring
  const requestedSeason = new URLSearchParams(window.location.search).get("season");
  const SUPPORTED_SEASONS = new Set(["autumn"]);
  const ACTIVE_SEASON = SUPPORTED_SEASONS.has(requestedSeason)
    ? requestedSeason
    : DEFAULT_SEASON;

  const ASSET_BASE = "https://stagandstonecoffee.com";
  const image = filename => ASSET_BASE + "/" + ACTIVE_SEASON + "-menu/" + filename;

  const commonCoffee = [
    {
      id:"house-dark-roast",
      categoryId:"coffee",
      name:"House Dark Roast",
      image:image("dark-roast.webp"),
      price:3.25,
      modifierGroups:[
        {
          id:"dark-roast-size",
          name:"Size",
          note:"12 oz $3.25 • 16 oz $3.75",
          maxSelections:1,
          options:[
            { id:"12oz", name:"12 oz", price:0 },
            { id:"16oz", name:"16 oz", price:0.50 }
          ]
        }
      ]
    },
    { id:"cold-brew", categoryId:"coffee", name:"Cold Brew", image:image("cold-brew.webp"), price:4.95 },
    { id:"espresso-single", categoryId:"coffee", name:"Espresso Shot", image:image("espresso-single.webp"), price:3.25 },
    { id:"espresso-double", categoryId:"coffee", name:"Espresso Double Shot", image:image("espresso-double.webp"), price:4.25 }
  ];

  const commonHouse = [
    { id:"hot-chocolate", categoryId:"house-apothecary", name:"Hot Chocolate", image:image("hot-chocolate.webp") },
    { id:"matcha-latte", categoryId:"house-apothecary", name:"Matcha Latte", image:image("matcha-latte.webp") },
    { id:"loose-leaf-tea", categoryId:"house-apothecary", name:"Loose Leaf Tea", image:image("loose-leaf-tea.webp") }
  ];

  const commonBreakfast = [
    { id:"stone-house-breakfast", categoryId:"breakfast-bakehouse", name:"Stone House Breakfast", image:image("stone-house-brekkie.webp") }
  ];

  const commonLunch = [
    { id:"stag-melt", categoryId:"lunch", name:"Stag Melt", image:image("stag-melt.webp") },
    { id:"wildwood-melt", categoryId:"lunch", name:"Wildwood Melt", image:image("wildwood-melt.webp") },
    { id:"orchard-turkey", categoryId:"lunch", name:"Orchard Turkey", image:image("orchard-turkey.webp") },
    { id:"tavern-ham-cheese", categoryId:"lunch", name:"Tavern Ham & Cheese", image:image("tavern-ham-cheese.webp") }
  ];

  const commonSides = [
    { id:"kettle-chips", categoryId:"sides-addons", name:"Kettle Chips", image:image("kettle-chips.webp") },
    { id:"rosemary-roasted-potatoes", categoryId:"sides-addons", name:"Rosemary Roasted Potatoes", image:image("rstd-rosemary-potatoes.webp") },
    { id:"city-butcher-bacon", categoryId:"sides-addons", name:"City Butcher Bacon", image:image("butcher-bacon.webp") },
    { id:"city-butcher-sausage", categoryId:"sides-addons", name:"City Butcher Sausage", image:image("butcher-sausage.webp") },
    { id:"sausage-pepper-gravy", categoryId:"sides-addons", name:"Sausage & Pepper Gravy", image:image("sausage-pepper-gravy.webp") },
    { id:"horseradish-mustard", categoryId:"sides-addons", name:"Horseradish Mustard", image:image("horseradish-mustard.webp") },
    { id:"smoky-onion-sauce", categoryId:"sides-addons", name:"Smoky Onion Sauce", image:image("smoky-onion.webp") }
  ];

  const SEASONS = {
    autumn: {
      label:"Autumn",
      coffee:[
        { id:"maple-sage-latte", categoryId:"coffee", name:"Maple Sage Latte", image:image("maple-sage-latte.webp"), seasonal:true },
        { id:"spiced-chai-latte", categoryId:"coffee", name:"Spiced Chai Latte", image:image("chai-latte.webp"), seasonal:true }
      ],
      house:[
        { id:"hot-spiced-apple-cider", categoryId:"house-apothecary", name:"Hot Spiced Apple Cider", image:image("hot-spiced-cider.webp"), seasonal:true },
        { id:"cranberry-hibiscus-refresher", categoryId:"house-apothecary", name:"Cranberry Hibiscus Refresher", image:image("cran-hib-refresher.webp"), seasonal:true }
      ],
      breakfast:[
        { id:"apple-butter-french-toast", categoryId:"breakfast-bakehouse", name:"Apple Butter French Toast", image:image("apple-butter-french-tst.webp"), seasonal:true },
        { id:"pumpkin-cream-cheese-loaf", categoryId:"breakfast-bakehouse", name:"Pumpkin Cream Cheese Loaf", image:image("pumpkin-cream-chz.webp"), seasonal:true },
        { id:"brown-butter-pear-scone", categoryId:"breakfast-bakehouse", name:"Brown Butter Pear Scone", image:image("bb-pear-scone.webp"), seasonal:true },
        { id:"apple-cider-muffin", categoryId:"breakfast-bakehouse", name:"Apple Cider Muffin", image:image("apple-cider-muffin.webp"), seasonal:true },
        { id:"molasses-oat-cookie", categoryId:"breakfast-bakehouse", name:"Molasses Oat Cookie", image:image("molasses-oat.webp"), seasonal:true }
      ],
      lunch:[
        { id:"orchard-smoke-burnt-ends", categoryId:"lunch", name:"Orchard Smoke Burnt Ends", image:image("orchard-smoke-burnt-ends.webp"), seasonal:true }
      ],
      sides:[
        { id:"apple-cabbage-slaw", categoryId:"sides-addons", name:"Apple-Cabbage Slaw", image:image("apple-cabbage-slaw.webp"), seasonal:true },
        { id:"roasted-squash-sage", categoryId:"sides-addons", name:"Roasted Squash & Sage", image:image("rstd-squash-sage.webp"), seasonal:true },
        { id:"roasted-squash-soup", categoryId:"sides-addons", name:"Roasted Squash Soup", image:image("rstd-squash-soup.webp"), seasonal:true },
        { id:"spiced-apple-butter", categoryId:"sides-addons", name:"Spiced Apple Butter", image:image("apple-butter.webp"), seasonal:true },
        { id:"cranberry-preserves", categoryId:"sides-addons", name:"Cranberry Preserves", image:image("cranberry-citrus-preserves.webp"), seasonal:true }
      ],
      crafting:[
        { id:"autumn-fried-meat", name:"Chicken-Fried Steak", price:5.50, seasonal:true },
        { id:"seasonal-preserve", name:"Spiced Apple Butter", price:1.00, seasonal:true }
      ]
    },

    spring: {
      label:"Spring",
      coffee:[
        { id:"honey-lavender-latte", categoryId:"coffee", name:"Honey Lavender Latte", image:image("honey-lav-latte.webp"), seasonal:true },
        { id:"honey-cardamom-chai", categoryId:"coffee", name:"Honey Cardamom Chai", image:image("honey-crdm-chai.webp"), seasonal:true }
      ],
      house:[
        { id:"strawberry-matcha", categoryId:"house-apothecary", name:"Strawberry Matcha", image:image("strawberry-matcha.webp"), seasonal:true },
        { id:"strawberry-hibiscus-refresher", categoryId:"house-apothecary", name:"Strawberry Hibiscus Refresher", image:image("straw-hib-refresher.webp"), seasonal:true },
        { id:"rosemary-lemonade", categoryId:"house-apothecary", name:"Rosemary Lemonade", image:image("rosemary-lemonade.webp"), seasonal:true }
      ],
      breakfast:[
        { id:"strawberry-honey-french-toast", categoryId:"breakfast-bakehouse", name:"Strawberry Honey French Toast", image:image("straw-honey-french-tst.webp"), seasonal:true },
        { id:"strawberry-cream-cheese-loaf", categoryId:"breakfast-bakehouse", name:"Strawberry Cream Cheese Loaf", image:image("straw-crm-chz-loaf.webp"), seasonal:true },
        { id:"lemon-poppy-scone", categoryId:"breakfast-bakehouse", name:"Lemon Poppy Scone", image:image("lemon-poppy-scone.webp"), seasonal:true }
      ],
      lunch:[
        { id:"spring-roast-beef", categoryId:"lunch", name:"Spring Roast Beef", image:image("spring-rst-beef.webp"), seasonal:true },
        { id:"garden-tartine", categoryId:"lunch", name:"Garden Tartine", image:image("garden-tartine.webp"), seasonal:true },
        { id:"herbed-turkey", categoryId:"lunch", name:"Herbed Turkey", image:image("herbed-turkey.webp"), seasonal:true },
        { id:"spring-ham-melt", categoryId:"lunch", name:"Spring Ham Melt", image:image("spring-ham-melt.webp"), seasonal:true }
      ],
      sides:[
        { id:"herbed-new-potato-salad", categoryId:"sides-addons", name:"Herbed New Potato Salad", image:image("herbed-pot-salad.webp"), seasonal:true },
        { id:"spring-pea-radish-salad", categoryId:"sides-addons", name:"Spring Pea & Radish Salad", image:image("spring-pea-rad-salad.webp"), seasonal:true },
        { id:"honey-dill-roasted-carrots", categoryId:"sides-addons", name:"Honey-Dill Roasted Carrots", image:image("honey-dill-rstd-carrots.webp"), seasonal:true },
        { id:"roasted-asparagus", categoryId:"sides-addons", name:"Roasted Asparagus", image:image("roasted-asparagus.webp"), price:4.25, seasonal:true },
        { id:"strawberry-preserve", categoryId:"sides-addons", name:"Strawberry Preserve", image:image("strawberry-preserves.webp"), seasonal:true },
        { id:"herb-aioli", categoryId:"sides-addons", name:"Herb Aioli", image:image("herb-aioli.webp"), price:0.75, seasonal:true },
        { id:"honey-mustard", categoryId:"sides-addons", name:"House-Made Whole Grain Honey Mustard", image:image("whole-grn-hon-must.webp"), price:0.75, seasonal:true }
      ],
      crafting:[
        { id:"spring-fried-meat", name:"Country-Fried Pork Tenderloin", price:4.75, seasonal:true },
        { id:"seasonal-preserve", name:"Strawberry Preserve", price:1.00, seasonal:true }
      ]
    }
  };

  const season = SEASONS[ACTIVE_SEASON];

  const craftingTable = {
    id:"crafting-table-biscuit",
    categoryId:"breakfast-bakehouse",
    name:"The Crafting Table",
    image:image("crafting-table.webp"),
    hero:true,
    price:3.50,
    modifierGroups:[
      {
        id:"crafting-table-addons",
        name:"Build Your Biscuit",
        note:"Start with one house buttermilk biscuit and choose your additions.",
        maxSelections:8,
        options:[
          { id:"egg", name:"Egg", price:1.25 },
          { id:"cheddar", name:"Cheddar", price:0.75 },
          { id:"bacon", name:"City Butcher Bacon", price:2.75 },
          { id:"sausage", name:"City Butcher Sausage", price:2.50 },
          { id:"sausage-gravy", name:"Sausage & Pepper Gravy", price:2.25 },
          ...season.crafting,
          { id:"extra-biscuit", name:"Extra Biscuit", price:2.75 }
        ]
      }
    ]
  };

  window.STAG_STONE_CATALOG = {
    schemaVersion: 3,
    activeSeason: ACTIVE_SEASON,
    activeSeasonLabel: season.label,
    source: {
      label: "stagandstonecoffee.com",
      url: "https://stagandstonecoffee.com/menu.html"
    },
    currency: "USD",
    serviceModes: [
      { id: "dine-in", label: "Dine In", icon: "⌂" },
      { id: "to-go", label: "To Go", icon: "↗" }
    ],
    categories: [
      { id: "coffee", name: "Coffee & Espresso", shortName: "Coffee", eyebrow: "The morning ritual", note: "Roasted • pulled • poured", accent: "coffee" },
      { id: "house-apothecary", name: "House Drinks & Apothecary", shortName: "Apothecary", eyebrow: "House favorites • herbs • fruit • flowers • spice", note: "Familiar favorites and botanical drinks gathered for the season", accent: "botanical" },
      { id: "breakfast-bakehouse", name: "Breakfast & Bakehouse", shortName: "Breakfast", eyebrow: "From the hearth • Lynn's bakehouse", note: "Warm breakfast • daily staples • rotating bakes", accent: "hearth" },
      { id: "lunch", name: "Lunch", shortName: "Lunch", eyebrow: "Midday at the bakehouse", note: "Toasted • stacked • made to order", accent: "lunch" },
      { id: "sides-addons", name: "Sides & Add-Ons", shortName: "Sides", eyebrow: "A little something extra", note: "Sides • sauces • jams • extras", accent: "pantry" }
    ],
    items: [
      ...commonCoffee,
      ...season.coffee,
      ...commonHouse,
      ...season.house,
      ...commonBreakfast,
      ...season.breakfast,
      craftingTable,
      ...commonLunch,
      ...season.lunch,
      ...commonSides,
      ...season.sides
    ].map(item => ({
      squareCatalogId: null,
      available: true,
      variations: [],
      modifierGroups: [],
      price: null,
      ...item
    }))
  };
})();
