/* Shared project data: use these objects to build the gallery. */
const paintings = [
  {
    "id": "evening-sky",
    "title": "A small evening sky",
    "medium": "acrylic",
    "difficulty": "Beginner",
    "minutes": 30,
    "description": "Blend a peach-colored horizon into a soft blue sky, then add a quiet silhouette.",
    "colors": [
      "Sky blue",
      "Peach",
      "White",
      "Deep navy"
    ],
    "supplies": [
      "A small canvas or acrylic paper",
      "Acrylic paint: blue, red, yellow, and white",
      "One flat brush and one small round brush",
      "A palette, water cup, and cloth"
    ],
    "steps": [
      [
        "Set up your colors",
        "Protect your table. Mix a pale blue with white and a little blue. Mix peach with white, a small amount of red, and a touch of yellow. Keep a separate puddle of white."
      ],
      [
        "Place the horizon",
        "Choose a horizon slightly below the middle of your surface. Paint the upper area pale blue and the lower part of the sky peach. Use a damp, not dripping, flat brush."
      ],
      [
        "Soften the meeting point",
        "While both colors are wet, move the brush gently from side to side where they meet. Wipe the brush between passes. Add white if the middle looks too dark."
      ],
      [
        "Add the sun",
        "Let the background dry to the touch. Paint a small pale circle near the horizon. Keep its edge soft by lightly brushing around it with the sky color."
      ],
      [
        "Make a silhouette",
        "Mix a deep navy from blue with a little red. Paint a low uneven hill along the bottom. Add two or three slender grass marks with the round brush."
      ],
      [
        "Let it rest",
        "Stop before filling every empty space. Let the painting dry flat. Rinse your brushes before acrylic paint dries in the bristles."
      ]
    ],
    "tip": "If the sky dries before it blends, let it dry completely and paint a fresh thin layer. Scrubbing a half-dry layer usually makes it patchy.",
    "image": "images/evening-sky.webp",
    "alt": "Illustration of a peach sunset above a navy hill with small grasses"
  },
  {
    "id": "little-daisies",
    "title": "Little daisies in blue",
    "medium": "acrylic",
    "difficulty": "Beginner",
    "minutes": 35,
    "description": "Practice simple petal strokes with a loose handful of white daisies and leafy stems.",
    "colors": [
      "Pale blue",
      "White",
      "Golden yellow",
      "Leaf green"
    ],
    "supplies": [
      "Acrylic paper or a small canvas",
      "Acrylic paint: blue, yellow, white, and a little red",
      "A medium flat brush and a small round brush",
      "A palette, water cup, and cloth"
    ],
    "steps": [
      [
        "Paint a calm background",
        "Mix blue into plenty of white. Cover your surface with an even, thin layer using the flat brush. Leave it until it is dry to the touch."
      ],
      [
        "Choose three flower centers",
        "Place three small yellow circles at different heights. Keep them away from the exact center of the page so the arrangement feels relaxed."
      ],
      [
        "Pull the petals outward",
        "Load the round brush with white. Press near a yellow center, pull outward, and lift. Repeat around each center. The petals can vary in length and spacing."
      ],
      [
        "Connect the stems",
        "Mix green from blue and yellow. With the tip of the brush, draw a thin stem downward from each flower. Let the stems overlap naturally."
      ],
      [
        "Add a few leaves",
        "Use a press-and-lift stroke on either side of the stems. Paint only a few leaves so the flowers stay easy to see."
      ],
      [
        "Finish the centers",
        "Add a tiny touch of warm yellow to each center and a few white highlights to the petals. Clean the brushes and let the painting dry."
      ]
    ],
    "tip": "Practice one petal on scrap paper first. A loaded brush and a single confident stroke often work better than tracing each petal.",
    "image": "images/little-daisies.webp",
    "alt": "Illustration of three white daisies with green stems on a pale blue background"
  },
  {
    "id": "sea-and-shore",
    "title": "Sea, shore, and a slow afternoon",
    "medium": "acrylic",
    "difficulty": "Next step",
    "minutes": 45,
    "description": "Build a coastal scene with a straight horizon and a few broken lines of sea foam.",
    "colors": [
      "Ocean blue",
      "Turquoise",
      "Sand",
      "White"
    ],
    "supplies": [
      "Acrylic paper or canvas",
      "Acrylic paint: blue, green, yellow, white, and brown",
      "A wide flat brush and a small round brush",
      "A palette, water cup, and cloth"
    ],
    "steps": [
      [
        "Block in three areas",
        "Sketch a light horizontal line above the middle. Paint pale blue above it, a deeper blue band below it, and a warm sand area at the bottom."
      ],
      [
        "Keep the horizon clear",
        "Use the narrow edge of the flat brush to tidy the sea horizon. Keep this line mostly level while the beach edge can curve."
      ],
      [
        "Change the water color",
        "Mix blue, a little green, and white. Add this lighter turquoise near the shore. Blend it gently into the deeper water while the paint is wet."
      ],
      [
        "Suggest small waves",
        "After the water dries, add a few short horizontal strokes in lighter blue. Leave gaps between them instead of covering the entire sea."
      ],
      [
        "Paint the foam",
        "With a small amount of white paint, place broken curved marks along the shore. Make the front edge irregular so it feels like moving water."
      ],
      [
        "Add sand shadows",
        "Mix a little brown into the sand color. Paint a narrow shadow behind the foam and soften it with the original sand color. Let the work dry flat."
      ]
    ],
    "tip": "Use less white than you expect for foam. A few broken strokes are enough to suggest waves without hiding the water.",
    "image": "images/sea-and-shore.webp",
    "alt": "Illustration of turquoise sea meeting a warm sandy shore with white foam"
  },
  {
    "id": "misty-hills",
    "title": "Misty blue hills",
    "medium": "watercolor",
    "difficulty": "Beginner",
    "minutes": 30,
    "description": "Explore light washes and layered hills, leaving a little white paper between them.",
    "colors": [
      "Pale blue",
      "Slate blue",
      "Deep blue"
    ],
    "supplies": [
      "Watercolor paper, ideally 300 gsm",
      "Blue watercolor and an optional second cool color",
      "A medium round watercolor brush",
      "Two water cups, a palette, and a paper towel"
    ],
    "steps": [
      [
        "Prepare your washes",
        "Mix three puddles of blue: very pale, medium, and deeper. Tape the paper to a board if you have low-tack artist tape. Use clean water for mixing."
      ],
      [
        "Wash the sky",
        "Wet the upper part of the paper lightly. Brush in the palest blue, keeping some white near the horizon. Tilt the paper gently if paint collects in one spot."
      ],
      [
        "Paint a distant ridge",
        "Wait until the sky is dry. Use the pale wash to paint an uneven hill across the upper middle. Pull the color downward with a damp brush."
      ],
      [
        "Layer the middle hill",
        "When the first hill dries, paint a lower ridge with the medium wash. Leave a narrow, uneven strip of white paper between parts of the hills."
      ],
      [
        "Bring the last hill forward",
        "Paint the nearest ridge with the deeper wash. Keep its shape simple and place it lower than the other hills."
      ],
      [
        "Check the balance",
        "Let everything dry before deciding whether it needs more color. Remove tape slowly, pulling it away from the painting at a low angle."
      ]
    ],
    "tip": "Dry layers keep the hill edges clear. If you add another ridge while the paper is wet, the colors will flow together.",
    "image": "images/misty-hills.webp",
    "alt": "Watercolor-style illustration of layered blue hills separated by pale mist"
  },
  {
    "id": "leaf-study",
    "title": "A page of little leaves",
    "medium": "watercolor",
    "difficulty": "Beginner",
    "minutes": 20,
    "description": "Learn a press-and-lift brushstroke through a small botanical study in soft greens.",
    "colors": [
      "Sage green",
      "Olive green",
      "Warm yellow"
    ],
    "supplies": [
      "Watercolor paper",
      "Green watercolor, or blue and yellow to mix it",
      "A small or medium pointed round brush",
      "Water, a palette, and scrap paper"
    ],
    "steps": [
      [
        "Find your green",
        "Mix a watery pale green. Make a second mixture with less water for darker leaves. Try both mixtures on scrap paper before beginning."
      ],
      [
        "Practice one leaf",
        "Touch the brush tip to the paper, press the bristles down, pull a short distance, and lift to a point. Practice until the movement feels comfortable."
      ],
      [
        "Draw a gentle stem",
        "Use the brush tip to paint a thin curved line. If it becomes thick, make the leaves larger instead of trying to erase wet paint."
      ],
      [
        "Grow the leaves",
        "Place press-and-lift strokes on alternating sides of the stem. Leave small gaps and change the angle of each leaf slightly."
      ],
      [
        "Vary the color",
        "Use pale green for some leaves and the deeper mixture for others. While a leaf is still damp, you can touch a little yellow into its base."
      ],
      [
        "Leave breathing room",
        "Add a second small sprig if the page needs balance. Let it dry before adding one or two thin veins with the brush tip."
      ]
    ],
    "tip": "A round brush that holds its point helps with both stems and leaves. If the marks spread too much, reduce the water on the brush.",
    "image": "images/leaf-study.webp",
    "alt": "Watercolor-style illustration of loose green leaves on curved stems"
  },
  {
    "id": "rainy-window",
    "title": "Rain at the window",
    "medium": "watercolor",
    "difficulty": "Next step",
    "minutes": 40,
    "description": "Use a gentle wet-on-wet wash and thin lines to suggest a rainy afternoon indoors.",
    "colors": [
      "Blue gray",
      "Deep navy",
      "Muted green"
    ],
    "supplies": [
      "Watercolor paper, ideally 300 gsm",
      "Blue and a little brown or gray watercolor",
      "A medium round brush and a small pointed brush",
      "Water, a palette, paper towel, and a pencil"
    ],
    "steps": [
      [
        "Sketch the window",
        "Lightly draw a large rectangle with one vertical and one horizontal divider. Keep the pencil lines faint; they are only a placement guide."
      ],
      [
        "Wet the view",
        "Dampen the areas inside the window with clean water, leaving the frame dry. The paper should look evenly shiny, without puddles."
      ],
      [
        "Drop in distant colors",
        "Touch pale blue gray into the upper panes and muted green near the bottom. Let the colors move without repeatedly brushing them."
      ],
      [
        "Lift a little light",
        "While the wash is damp, dab a few areas with a clean, nearly dry brush. Wipe the brush between touches so it can pick up more color."
      ],
      [
        "Define the frame",
        "Let the wash dry completely. Paint the window border and dividers with a controlled, darker mixture using the pointed brush."
      ],
      [
        "Suggest the rain",
        "Add a few thin vertical marks in pale blue gray across the view. Vary their length and leave plenty of space. Add a soft shadow below the frame."
      ]
    ],
    "tip": "If a line spreads into the wash, stop and let the paper dry. Clear frame lines need dry paper and a brush that is damp rather than dripping.",
    "image": "images/rainy-window.webp",
    "alt": "Watercolor-style illustration of a blue rainy view through a window"
  }
];
