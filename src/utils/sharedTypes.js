import PropTypes from 'prop-types';

const UserType = PropTypes.shape({
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
});

const CategoryType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: UserType.isRequired,
  created: PropTypes.string.isRequired,
});

const TagType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: UserType.isRequired,
  created: PropTypes.string.isRequired,
});

const CategoriesFilter = PropTypes.shape({
  accountId: PropTypes.number.isRequired,
  keyword: PropTypes.string,
});

const TagsFilter = PropTypes.shape({
  accountId: PropTypes.number.isRequired,
  keyword: PropTypes.string,
});

const TransactionsFilter = PropTypes.shape({
  accountId: PropTypes.number.isRequired,
  keyword: PropTypes.string,
});

const UsersFilter = PropTypes.shape({
  accountId: PropTypes.number.isRequired,
  keyword: PropTypes.string,
});

const TransactionType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  category: CategoryType.isRequired,
  tag: TagType,
  spentBy: UserType,
  amount: PropTypes.number.isRequired,
  createdBy: UserType.isRequired,
  description: PropTypes.string.isRequired,
});

const QuickFilter = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export {
  TransactionType,
  CategoryType,
  UserType,
  TagType,
  AccountType,
  CategoriesFilter,
  TransactionsFilter,
  UsersFilter,
  QuickFilter,
  TagsFilter,
};