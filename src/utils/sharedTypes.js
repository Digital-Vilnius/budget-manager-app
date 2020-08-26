import PropTypes from 'prop-types';

const AccountUserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
});

const AccountType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const AccountsListItemType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const CategoryType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: AccountUserType.isRequired,
  created: PropTypes.string.isRequired,
});

const TagType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: AccountUserType.isRequired,
  created: PropTypes.string.isRequired,
});

const CategoriesFilter = PropTypes.shape({
  keyword: PropTypes.string,
});

const TagsFilter = PropTypes.shape({
  keyword: PropTypes.string,
});

const TransactionsFilter = PropTypes.shape({
  keyword: PropTypes.string,
  amountFrom: PropTypes.number,
  amountTo: PropTypes.number,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  categoriesIds: PropTypes.arrayOf(PropTypes.number),
  tagsIds: PropTypes.arrayOf(PropTypes.number),
});

const AccountUsersFilter = PropTypes.shape({
  keyword: PropTypes.string,
});

const TransactionType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  category: CategoryType.isRequired,
  tag: TagType,
  spentBy: AccountUserType,
  amount: PropTypes.number.isRequired,
  createdBy: AccountUserType.isRequired,
  description: PropTypes.string.isRequired,
});

const QuickFilter = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export {
  TransactionType,
  CategoryType,
  AccountUserType,
  TagType,
  AccountType,
  CategoriesFilter,
  TransactionsFilter,
  AccountUsersFilter,
  QuickFilter,
  TagsFilter,
  AccountsListItemType,
};
