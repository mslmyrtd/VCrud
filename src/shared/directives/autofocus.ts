export const vAutofocus = {
    mounted: (el: any) => {
      if (el.tagName !== 'INPUT') {
        el.childNodes.forEach((x: any) => {
          if (x.classList?.contains('multi-input')) x.focus();
        });
      }
      el.focus();
    },
  };