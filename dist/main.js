"use strict";
function listPdfFiles() {
    const files = DriveApp.getFilesByType(MimeType.PDF);
    const results = [];
    while (files.hasNext()) {
        const file = files.next();
        results.push(`${file.getName()} | ${file.getSize()} bytes`);
    }
    if (results.length === 0) {
        Logger.log("PDFファイルは見つかりませんでした。");
        return;
    }
    Logger.log("=== PDF一覧 ===");
    results.forEach((r) => Logger.log(r));
}
