import styled from '@emotion/styled';

const MenuList = styled.ul({
  display: 'flex',
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',
  '& + ul': {
    borderTop: '1px solid #eee',
  }
});

export default MenuList;