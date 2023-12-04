// Search function
var timer_search_users = "";
function search_users() {
  clearTimeout(timer_search_users);
  timer_search_employees = setTimeout(async function () {
    const frm = document.querySelector("#frm_search");
    const url = frm.getAttribute("data-url");
    const conn = await fetch(`/api/${url}`, {
      method: "POST",
      body: new FormData(frm),
    });
    const data = await conn.json();
    document.querySelector("#query_results").innerHTML = "";

    data.forEach((user) => {
      let div_user = `
        <div class="grid grid-cols-[100fr,100fr,50fr] p-2">
          <div class="">${user.user_name}</div>
          <div class="">${user.user_last_name}</div>
          <div class="">${user.employee_salary}</div>
        </div>
      `;
      document
        .querySelector("#query_results")
        .insertAdjacentHTML("afterbegin", div_user);
    });
  }, 500);
}

/* async function search_customers() {
  const frm = event.target.form;
  const conn = await fetch("/api/api-search-customers.php", {
    method: "POST",
    body: new FormData(frm),
  });
  const data = await conn.json();
  document.querySelector("#query_results").innerHTML = "";
  data.forEach((customer) => {
    let div_customer = `
        <div class="grid grid-cols-[100fr,100fr,50fr] p-2">
            <div class="">${customer.user_name}</div>
            <div class="">${customer.user_last_name}</div>
        </div>
    `;
    document
      .querySelector("#query_results")
      .insertAdjacentHTML("afterbegin", div_customer);
  });
}

async function search_partners() {
  const frm = event.target.form;
  const conn = await fetch("/api/api-search-partners.php", {
    method: "POST",
    body: new FormData(frm),
  });
  const data = await conn.json();
  document.querySelector("#query_results").innerHTML = "";
  data.forEach((partner) => {
    let div_partner = `
        <div class="grid grid-cols-[100fr,100fr,50fr] p-2">
            <div class="">${partner.user_name}</div>
            <div class="">${partner.user_last_name}</div>
        </div>
    `;
    document
      .querySelector("#query_results")
      .insertAdjacentHTML("afterbegin", div_partner);
  });
}
 */
