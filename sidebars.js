
const sidebars = {
  mihoyo: [
    'start',
    {
      type: 'category',
      label: 'Akebi',
      items: [
        'akebi/start',
        {
          type: 'category',
          label: '进阶教程',
          items: [
            'akebi/advancedtutorial/transportx',
            'akebi/advancedtutorial/config',
            'akebi/advancedtutorial/lincense',
          ],
        },
        'akebi/recommended',
        'akebi/problem',
        'akebi/question',
      ],
    },
    {
      type: 'category',
      label: 'PaimonPro',
      items: [
        'paimonpro/start',
        'paimonpro/problem',
      ],
    },
    {
      type: 'category',
      label: 'Meow',
      items: [
        'meow/start',
        'meow/problem',
      ],
    },
    {
      type: 'category',
      label: 'MuuPro',
      items: [
        'muupro/start',
        'muupro/problem',
      ],
    },
  ],
};

export default sidebars;
