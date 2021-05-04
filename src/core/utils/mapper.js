import _ from 'lodash';

const transformArrayToSections = (array, field = 'created') => {
  const groups = _.groupBy(array, field);
  const sections = [];
  Object.keys(groups).forEach(date => {
    const data = _.sortBy(groups[date], 'created').reverse();
    sections.push({ title: date, data });
  });
  return sections;
};

export { transformArrayToSections };
