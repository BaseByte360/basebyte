import { z, defineCollection, type ImageFunction } from "astro:content";

const menu = z.object({
  id: z.string(),
  label: z.string(),
});

const gradientColors = ['orange', 'purple', 'blue'] as const;

const stepContent = (image: ImageFunction) => z.object({
  color: z.enum(gradientColors),
  title: z.string(),
  description: z.string(),
  icon: image(),
  iconAlt: z.string(),
})

const serviceCarouselItemContent = z.object({
  color: z.enum(gradientColors),
  title: z.string(),
  paragraphs: z.array(z.string()),
  words: z.array(z.string())
})

const content = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    metadata: z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
      twitterUsername: z.string(),
    }),
    home: z.object({
      menu,
      firstLine: z.object({
        bold: z.string(),
        content: z.string(),
        highlight: z.string(),
      }),
      secondLine: z.object({
        content: z.string(),
        highlights: z.array(z.string()),
      }),
      callToAction: z.object({
        link: z.string(),
        content: z.string(),
      })
    }),
    whatWeDo: z.object({
      menu,
      content: z.object({
        title: z.object({
          content: z.string(),
          highlight: z.string(),
        }),
        paragraphs: z.array(z.string()),
        steps: z.array(stepContent(image)),
        carouselLink: z.string(),
        carouselLinkContent: z.string(),
        carousel: z.array(serviceCarouselItemContent),
      })
    }),
    who: z.object({
      menu,
      title: z.string(),
      content: z.array(z.string()),
      slogan: z.object({
        company: z.string(),
        content: z.string(),
      }),
      collaborators: z.array(z.object({
        name: z.string(),
        role: z.string(),
        avatar: image(),
      }))
    }),
    contact: z.object({
      menu,
      content: z.object({
        title: z.string(),
        paragraphs: z.array(z.string()),
        callToAction: z.string(),
        or: z.string(),
        followUs: z.string(),
      })
    }),
    footer: z.string(),
  }),
});

const clients = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: image(),
      alt: z.string(),
    }),
});

const visitingCard = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: z.object({
      title: z.string(),
      description: z.string(),
    }),
    content: z.object({
      phraseFull: z.string(),
      phrase: z.string(),
      firstHighlight: z.string(),
      interpolation: z.string(),
      secondHighlight: z.string(),
    }),
    callToLinkTree: z.object({
      content: z.string(),
      button: z.string(),
      buttonLink: z.string(),
    })
  })
})

const socialMedia = defineCollection({
  type: 'data',
  schema:z.array(z.object({
    id: z.string(),
    title: z.string(),
    link: z.string(),
    hideFromMainPage: z.boolean().optional(),
    canFollow: z.boolean()
  })),
})

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    metadata: z.object({
      title: z.string(),
      description: z.string(),
    }),
    redirect: z.string()
  })
})

const footer = defineCollection({
  type: 'data',
  schema: z.object({
    footer: z.object({
      company: z.string(),
      year: z.number(),
      copyright: z.string(),
    }),
    links: z.array(z.object({
      label: z.string(),
      link: z.string(),
    }))
  })
})

const policies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  main: content,
  clients,
  contact,
  visitingCard,
  socialMedia,
  footer,
  policies,
};
