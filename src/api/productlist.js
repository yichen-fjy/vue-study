import prolist from '@/utils/prolist';

export function getProductList(oParams){
  return prolist.get('/get/productlist', {
    params: oParams.params
  });
};