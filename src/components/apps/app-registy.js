import Sample from './sample';

const apps = [
  {
    id: 'sample',
    icon: 'https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-earth-planet-icon-earth-icon-by-vexels.png',
    path: '/app/sample',
    component: Sample
  },
];

export const getApps = () => apps.map(({ id, icon, path }) => ({
  id,
  icon,
  path
}));

export const getApp = (id) => apps.find(x => x.id = id);