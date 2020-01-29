'use babel';

module.exports = {
  activate() {
    inkdrop.onAppReady(() => {
      const { config } = inkdrop.store.getState();
      inkdrop.commands.dispatch(document.body, 'core:note-list-show-notes-in-book', {
        bookId: config.core.defaultBook,
      });
    });
  },
};
