/**
 * =========================================================
 *  WEB APP (HTML/CSS/JS) - HUB INTERNO
 *  Google Apps Script -> HtmlService
 * =========================================================
 * Como editar:
 * - Textos/links/embeds ficam no Index.html
 * - Aqui normalmente você só mexe em título e headers
 */

function doGet(e) {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Hub Interno | Accenture')
    // Mantém embeds mais permissivos em alguns cenários
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  return html;
}
