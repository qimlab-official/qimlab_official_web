const footerContent = `
    <footer class="py-10 bg-brand-surface border-t border-white/10">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start text-sm text-gray-500">
                <div class="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
                    <div class="font-mono text-center md:text-left">
                        <div class="mb-1">&copy; Qim Lab Enterprise. All Rights Reserved</div>
                        <div class="text-xs opacity-70">Reg No: 202503078912 (TR0294123-A)</div>
                    </div>
                    <!-- SSM BizTrust QR Placeholder -->
                    <div class="bg-white p-1 rounded-md w-fit">
                        <img src="https://placehold.co/100x100?text=SSM+BizTrust" 
                             alt="SSM BizTrust Verification" 
                             class="w-24 h-24 object-contain"
                             style="display: block;">
                    </div>
                </div>
                
                <div class="flex flex-col md:flex-row gap-8 md:gap-0">
                <!-- Related Links -->
                    <div class="flex flex-col mr-12">
                        <h4 class="text-white font-semibold mb-4">Related Links</h4>
                        <div class="flex flex-col gap-2">
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Privacy Policy</a>
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Terms of Service</a>
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Sitemap</a>
                        </div>
                    </div>
                    <!-- Social Links -->
                    <div class="flex flex-col mr-12">
                        <h4 class="text-white font-semibold mb-4">Connect</h4>
                        <div class="flex flex-col gap-2">
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Instagram</a>
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">LinkedIn</a>
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Twitter</a>
                        </div>
                    </div>

                    <!-- Contact Us -->
                    <div class="flex flex-col">
                        <h4 class="text-white font-semibold mb-4">Contact Us</h4>
                        <div class="flex flex-col gap-2">
                            <a href="mailto:hello@qimlab.com" class="hover:text-brand-accent transition-colors hover-trigger">Email</a>
                            <a href="https://wa.me/60123456789" class="hover:text-brand-accent transition-colors hover-trigger">WhatsApp</a>
                            <a href="#" class="hover:text-brand-accent transition-colors hover-trigger">Request Free Consultation</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </footer>
`;

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = footerContent;
    }
}

customElements.define('global-footer', GlobalFooter);
