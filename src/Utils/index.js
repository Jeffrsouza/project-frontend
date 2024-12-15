export const formatCurrency = (valor) =>
  valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export const formatDate = (dt) => {
  const data = new Date(dt);
  return `${String(data.getDate()).padStart(2, "0")}/${String(
    data.getMonth() + 1
  ).padStart(2, "0")}/${data.getFullYear()}`;
};
export const getStatusName = (value) =>
  ({
    1: "Pendente",
    2: "Concluido",
    3: "Cancelado",
  }[value]);

export const formatPhoneMask = (v) => {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    // 11+ digits. Format as 5+4.
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    // 6..10 digits. Format as 4+4
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    // 3..5 digits. Add (0XX..)
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    // 0..2 digits. Just add (0XX
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
};

export const ValidarNullOrEmpty = (str) => {
  let ok = false;
  try {
    if (str !== undefined && str !== null && str !== "") {
      ok = true;
    } else {
      ok = false;
    }
  } catch (ex) {
    ok = false;
  }
  return ok;
};
