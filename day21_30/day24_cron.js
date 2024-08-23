import cron from "node-cron";
import fs from "fs";
import path from "path";
import invoices from "../data/invoice.json";

const archiveInvoice = () => {
    console.log("invoice tasks running", new Date());


    const filteredInvoices = invoices.filter((invoice) => invoice.status === "sold");

    // filter invoices to file
    const filteredInvoicesPath = path.join(__dirname, "data", "myfiltered-invoice.json");
    fs.writeFileSync(filteredInvoicesPath, JSON.stringify(filteredInvoices));

    console.log("Filtered invoices have been archived.");
};

// Schedule the cron task to run every day at 12:00 PM
cron.schedule("0 12 * * *", archiveInvoice);