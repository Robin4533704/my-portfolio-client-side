const [isDarkMode, setIsDarkMode] = React.useState(false);

React.useEffect(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  } else {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  }
}, []);

function toggleDarkMode() {
  setIsDarkMode(prev => {
    const newMode = !prev;
    if (newMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
    return newMode;
  });
}