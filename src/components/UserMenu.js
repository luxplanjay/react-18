import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};

export default function UserMenu() {
  return (
    <div style={styles.container}>
      <button type="button" onClick={() => console.log('Входим')}>
        Войти
      </button>

      <p style={styles.tag}>Юзер</p>
      <button type="button" onClick={() => console.log('Выходим')}>
        Выйти
      </button>
    </div>
  );
}
